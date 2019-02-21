const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const detail = require('./detail')
const user = require('./user')

module.exports = function withRouter(app) {
  app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
  detail(app, router)
  user(app, router)
}
