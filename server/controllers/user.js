const util = require('../utils/utils')

module.exports = app => {
  const stuModel = app.models.student
  const userModel = app.models.user
  // const proModel = app.models.product
  const UserControllers = {}
  let gettype = Object.prototype.toString

  const dbErr = {
    code: 1002,
    msg: '数据库异常'
  }
  UserControllers.getUserInfo = async ctx => {
    try{
      const student_id = +ctx.query.student_id
      if (!student_id || gettype.call(student_id).indexOf('Number') === -1){
        return ctx.body = {
          code: 10003,
          msg: '参数错误'
        }
      }
      const res = await userModel.find({student_id})
      if (res.length === 0){
        ctx.body = {
          code: 10004,
          msg: '未找到数据'
        }
      } else {
        /*let _studentId = res[0].student_id
        if (ctx.session.info.uid !== _studentId) {
          return ctx.body = {
            code: 1005,
            msg: '未登录'
          }
        }*/
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
  UserControllers.register = async ctx => {
    try{
      const {nick_name, email, password} = ctx.request.body
      if (!(nick_name && email && password)){
        ctx.body = {
          code: 10002,
          msg: "参数错误"
        }
      }
      if (gettype.call(nick_name).indexOf('String') === -1 || gettype.call(email).indexOf('String') === -1 ||
          gettype.call(password).indexOf('String') === -1) {
        ctx.body = {
          code: 10003,
          msg: "参数类型错误"
        }
      }
      //  判断数据库是否有数据 没有的话student_id 从1000开始
      let student_id = 1000
      const hasNum = await userModel.find().countDocuments()
      if (hasNum > 0){
        const userCount = await userModel.find().sort({"student_id": -1}).limit(1)
        student_id = userCount[0].student_id ? userCount[0].student_id + 1 : 1000
      }
      //  判断邮箱是否已注册
      const isExit = await userModel.findOne({email})
      if (isExit) {
        return ctx.body = {
          code: 10004,
          msg: "邮箱已存在"
        }
      }
      const regRes = await userModel.create({student_id, nick_name, email, password: util.md5Fun(password), lastLoginAt: new Date().getTime(), createAt: new Date().getTime()})
      if (regRes) {
        ctx.body = {
          code: 1001,
          msg: "注册成功"
        }
      }
    } catch(e) {
      ctx.body = dbErr
    }
  }
  UserControllers.login = async ctx => {
    try{
      const {email, password} = ctx.request.body
      if (!(email && password)){
        ctx.body = {
          code: 10002,
          msg: "参数错误"
        }
      }
      if (gettype.call(password).indexOf('String') === -1 || gettype.call(email).indexOf('String') === -1) {
        ctx.body = {
          code: 10003,
          msg: "参数类型错误"
        }
      }
      const isRegister = await userModel.findOne({email})
      if (!isRegister) {
        return ctx.body = {
          code: 10004,
          msg: '该邮箱还未注册,请先注册'
        }
      }
      let login = await userModel.findOne({email, password: util.md5Fun(password)})
      if (login) {
        await userModel.updateOne({email}, {$set: {lastLoginAt: new Date().getTime()}})
        ctx.session.info = {
          user: email,
          uid: login.student_id,
        }
        ctx.cookies.set('uid', login.student_id)
        ctx.body = {
          code: 1001,
          msg: '成功'
        }

      } else {
        return ctx.body = {
          code: 10005,
          msg: '邮箱或密码错误'
        }
      }

    } catch(e) {
      ctx.body = dbErr
    }
  }
  return UserControllers
}
