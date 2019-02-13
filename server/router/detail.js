module.exports = (app, router) => {
  const controller = app.controllers.detail

  router.get('/happyPig/detail', controller.list)
}
