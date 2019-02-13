module.exports = app => {
  const model = app.models.detail
  const DetailControllers = {}

  DetailControllers.list = async ctx => {
    return ctx.body = {
      status: 1001,
      msg: '成功'
    }
  }
  return DetailControllers
}
