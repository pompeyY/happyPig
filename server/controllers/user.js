module.exports = app => {
  const stuModel = app.models.student
  // const proModel = app.models.product
  const UserControllers = {}
  const dbErr = {
    code: 1002,
    msg: '数据库异常'
  }
  UserControllers.getUserInfo = async ctx => {
    try{
      let gettype = Object.prototype.toString
      const {student_id} = ctx.query
      if (!student_id && gettype.call(student_id).indexOf('Number') === -1){
        return ctx.body = {
          code: 10003,
          msg: '参数错误'
        }
      }
      const res = await stuModel.find({student_id})
      if (res.length === 0){
        ctx.body = {
          code: 10004,
          msg: '未找到数据'
        }
      } else {
        ctx.body = {
          code: 1001,
          data: res[0],
          msg: '成功'
        }
      }
    } catch (err) {
      ctx.body = dbErr
    }


  }
  UserControllers.addUserInfo = async ctx => {
    try{
      let gettype = Object.prototype.toString
      const {student_id, name, school, specialty, phone, stu_number, qq_num = '', avatar = '', birth_date = 0, signature = ''} = ctx.request.body
      if (!(student_id && name && school && specialty && phone && stu_number)){
          ctx.body = {
            code: 10002,
            msg: "参数错误"
          }
      }
      if (gettype.call(student_id).indexOf('Number') === -1 || gettype.call(name).indexOf('String') === -1 ||
        gettype.call(school).indexOf('String') === -1 || gettype.call(specialty).indexOf('String') === -1 ||
        gettype.call(phone).indexOf('String') === -1 || gettype.call(stu_number).indexOf('String') === -1 ||
        gettype.call(qq_num).indexOf('String') === -1 || gettype.call(avatar).indexOf('String') === -1 ||
        gettype.call(birth_date).indexOf('Number') === -1 || gettype.call(signature).indexOf('String') === -1) {
        ctx.body = {
          code: 10003,
          msg: "参数类型错误"
        }
      }
      const isExit = await stuModel.find({student_id})
      if (isExit.length > 0){
        return ctx.body = {
          code: 10005,
          msg: '信息已存在，不能重复添加'
        }
      }
      const res = await stuModel.create({student_id, name, school, specialty, phone, stu_number, qq_num, avatar, birth_date, signature})
      if (!res){
        ctx.body = {
          code: 10004,
          msg: '失败'
        }
      } else {
        ctx.body = {
          code: 1001,
          data: {},
          msg: '成功'
        }
      }
    } catch (err) {
      ctx.body = dbErr
    }


  }
  UserControllers.updateUserInfo = async ctx => {
    try{
      let gettype = Object.prototype.toString
      const {student_id, name, school, specialty, phone, stu_number, qq_num = '', avatar = '', birth_date = 0, signature = ''} = ctx.request.body
      if (!(student_id && name && school && specialty && phone && stu_number)){
          ctx.body = {
            code: 10002,
            msg: "参数错误"
          }
      }
      if (gettype.call(student_id).indexOf('Number') === -1 || gettype.call(name).indexOf('String') === -1 ||
        gettype.call(school).indexOf('String') === -1 || gettype.call(specialty).indexOf('String') === -1 ||
        gettype.call(phone).indexOf('String') === -1 || gettype.call(stu_number).indexOf('String') === -1 ||
        gettype.call(qq_num).indexOf('String') === -1 || gettype.call(avatar).indexOf('String') === -1 ||
        gettype.call(birth_date).indexOf('Number') === -1 || gettype.call(signature).indexOf('String') === -1) {
        ctx.body = {
          code: 10003,
          msg: "参数类型错误"
        }
      }
      const isExit = await stuModel.find({student_id})
      if (isExit.length === 0){
        return ctx.body = {
          code: 10005,
          msg: '信息不存在'
        }
      }
      const res = await stuModel.updateOne({student_id}, {$set: {name, school, specialty, phone, stu_number, qq_num, avatar, birth_date, signature}})
      console.log(111111, res)
      if (!res){
        ctx.body = {
          code: 10004,
          msg: '失败'
        }
      } else {
        ctx.body = {
          code: 1001,
          data: {},
          msg: '成功'
        }
      }
    } catch (err) {
      ctx.body = dbErr
    }


  }
  return UserControllers
}
