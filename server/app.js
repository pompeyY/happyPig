const Koa = require('koa');
const app = new Koa()
const session = require('koa-session')

app.keys = ['happyPig@pompeyy&grace'];

const CONFIG = {
  key: 'skey',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
}

app.use(session(CONFIG, app));

app.models = require('./models')
app.controllers = require('./controllers')(app)

const withConnect = require('./connection')
const withRouter = require('./router')

withConnect(app)
withRouter(app)

app.listen(8081, () => {
  console.log('运行在8081端口')
})
