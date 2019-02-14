module.exports = app => {
  const model = app.models.detail
  const DetailControllers = {}

  DetailControllers.list = async ctx => {
    try{
      const res = await model.find()
      console.log(111, ctx.query)
      ctx.body = {
        code: 1001,
        data:{
          list:res
        },
        msg: '成功'
      }
    } catch (err) {
      ctx.body = {
        code: 1002,
        msg: '失败'
      }
    }


  }
  return DetailControllers
}
