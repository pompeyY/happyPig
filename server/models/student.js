const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
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
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student

/*db.students.insert({"name": "李四", "school": "南京大学", "specialty": "电子信息工程", "stu_number": "20150902034", "phone": "18856448989"})*/
