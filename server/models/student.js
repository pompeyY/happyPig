const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  student_id: { // 学生id
    type: Number,
    required: true
  },
  name: {  // 姓名
    type: String,
    required: true
  },
  school: { // 学校
    type: String,
    required: true
  },
  specialty: {  // 专业
    type: String,
    required: true
  },
  stu_number: { // 学号
    type: Number,
    required: true
  },
  phone: { // 手机号
    type: String,
    required: true
  },
  qq_num: {  // qq号
    type: String
  },
  avatar: { // 头像
    type: String,
    default: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1550643511&di=093c5818a5dee7fe90d3afa824f7dcf9&src=http://b-ssl.duitang.com/uploads/item/201704/27/20170427155254_Kctx8.jpeg'
  },
  birth_date: { // 出生日期
    type: Number
  },
  signature: { // 签名
    type: String
  }

})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student

/*db.students.insert({"student_id":1000,"name": "李四", "school": "南京大学", "specialty": "电子信息工程", "stu_number": "20150902034", "phone": "18856448989", "qq_num": "110356485", "birth_date":574123112310,"signature": "地方阿斯蒂芬阿斯蒂芬"})*/
