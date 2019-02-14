module.exports = app => {
  const stuModel = app.models.student
  const proModel = app.models.product
  const DetailControllers = {}

  DetailControllers.detailAll = async ctx => {
    try{
      const res = await stuModel.aggregate([
        {
          $lookup: {
            from: "products",
            localField:"stu_number",
            foreignField:"stu_number",
            as:"pro_list"
          }
        },
        {
          $project: { "pro_list.name": 0, "pro_list.stu_number": 0}
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
      ctx.body = {
        code: 1002,
        msg: '数据库异常'
      }
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
      ctx.body = {
        code: 1002,
        msg: '数据库异常'
      }
    }


  }
  return DetailControllers
}
