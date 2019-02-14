module.exports = (app, router) => {
  const controller = app.controllers.detail
  const prefix = '/happyPig/api'
  router.get(`${prefix}/v1/detail`, controller.list)
}
