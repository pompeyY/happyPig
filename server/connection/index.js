const mongoose = require('mongoose')

module.exports = app => {
  let url = 'mongodb://localhost:27017/happyPig'
  mongoose.connect(url)

  const db = mongoose.connection

  db.once('open', () => console.log('数据库连接成功'))
  db.on('error', (err) => {
    console.log('数据库连接错误：', err)
    mongoose.disconnect()
  });
  db.on('close', () => {
    console.log('数据库断开连接，重新连接...')
    mongoose.connect(url)
  })
}
