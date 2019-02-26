const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  student_id: {                     // 学生id
    type: Number,
    required: true
  },
  nick_name: {                      // 昵称
    type: String,
    required: true
  },
  email: {                           //邮箱
    type: String,
    required: true
  },
  password: {                        //密码
    type: String,
    required: true
  },
  lastLoginAt: {                     // 上次登录时间
    type: Number,
    default: new Date().getTime()
  },
  createAt: {                        // 注册日期
    type: Number,
    default: new Date().getTime()
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User

/*db.users.insert({"student_id":1000,"nick_name": "回忆过去","email": "1103658541@qq.com", "password": "123456"})*/
