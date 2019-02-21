module.exports = app => {
  const stuModel = app.models.student
  const proModel = app.models.product
  const DetailControllers = {}
  const dbErr = {
    code: 1002,
    msg: '数据库异常'
  }
  DetailControllers.detailAll = async ctx => {
    try{
      const res = await stuModel.aggregate([
        {
          $lookup: {
            from: "products",
            localField:"student_id",
            foreignField:"student_id",
            as:"pro_list"
          }
        }
      ])
      ctx.body = {
        code: 1001,
        data:{
          list:res,
        },
        msg: '成功'
      }
    } catch (err) {
      ctx.body = dbErr
    }


  }
  DetailControllers.detail = async ctx => {
    try{
      let {size, page_num} = ctx.query
      if (!size || !page_num) {
        return ctx.body = {
          code: 10011,
          msg: '参数错误'
        }
      }
      page_num === '0' ? page_num = '1': page_num
      const res = await proModel.find().skip((+page_num - 1) * +size).limit(+size)
      ctx.body = {
        code: 1001,
        data:{
          list:res,
        },
        msg: '成功'
      }
    } catch (err) {
      ctx.body = dbErr
    }
  }
  DetailControllers.addProduct = async ctx => {
    try {
      let gettype = Object.prototype.toString
      const {student_id, img, pro_name, desc, puy_date, price, origin_price, pro_num, pro_type} = ctx.request.body
      if (!(student_id && img && pro_name && desc && puy_date && price && origin_price && pro_num && pro_type )){
        return ctx.body = {
          code: 10002,
          msg: "参数错误"
        }
      }
      if (gettype.call(student_id).indexOf('Number') === -1 || gettype.call(img).indexOf('Array') === -1 ||
        gettype.call(pro_name).indexOf('String') === -1 || gettype.call(desc).indexOf('String') === -1 ||
        gettype.call(puy_date).indexOf('Number') === -1 || gettype.call(price).indexOf('Number') === -1 ||
        gettype.call(origin_price).indexOf('Number') === -1 || gettype.call(pro_num).indexOf('Number') === -1 ||
        gettype.call(pro_type).indexOf('String') === -1) {
        return ctx.body = {
          code: 10003,
          msg: "参数类型错误"
        }
      }
      let pro_id = 1
      const hasNum = await proModel.find().countDocuments()
      if (hasNum > 0){
        const proCount = await proModel.find().sort({"pro_id": -1}).limit(1)
        pro_id = proCount[0].pro_id ? proCount[0].pro_id + 1 : 1
      }
      const res = await proModel.create({pro_id, img, student_id, pro_name, desc, puy_date, price, origin_price, pro_num, status: 0, pro_type})
      if (res){
        return ctx.body = {
          code: 1001,
          data: {},
          msg: '成功'
        }
      }else{
       return ctx.body = {
          code: 10004,
          data: res,
          msg: '失败'
        }
      }

    } catch(e) {
      console.log(33333, e)
      ctx.body = dbErr
    }
  }
  DetailControllers.proDelet = async ctx => {
    try{
      let {pro_id} = ctx.query
      if (!pro_id) {
        return ctx.body = {
          code: 10011,
          msg: '参数错误'
        }
      }
      const res = await proModel.deleteOne({pro_id})
      res.deletedCount > 0 ? ctx.body = {
        code: 1001,
        data:{},
        msg: '成功'
      } : ctx.body = {
        code: 10012,
        data:{},
        msg: '没有该条数据'
      }
    } catch (err) {
      ctx.body = dbErr
    }
  }
  return DetailControllers
}
