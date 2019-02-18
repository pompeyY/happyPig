module.exports = (app, router) => {
  const controller = app.controllers.detail
  const prefix = '/happy_pig/api'
  router.get(`${prefix}/v1/detail_all`, controller.detailAll)
  router.get(`${prefix}/v1/detail`, controller.detail)
  router.get(`${prefix}/v1/detail/pro_del`, controller.proDelet)
  router.post(`${prefix}/v1/detail/add_product`, controller.addProduct)
}
