const Koa = require('koa');
const app = new Koa()

app.models = require('./models')
app.controllers = require('./controllers')(app)

const withConnect = require('./connection')
const withRouter = require('./router')

withConnect(app)
withRouter(app)

app.listen(8081, () => {
  console.log('运行在8081端口')
})
