const detail = require('./detail')
const user = require('./user')

module.exports = app => ({
  detail: detail(app),
  user: user(app)
})
