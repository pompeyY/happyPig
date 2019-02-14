const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  pro_name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550124487994&di=573e74203ebe8dc99c72a01c1602a9e7&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-08%2F041717696.jpg"
  },
  desc: {
    type: String,
    required: true
  },
  puy_date: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  origin_price: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  pro_num: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
})

const Detail = mongoose.model('Detail', detailSchema)
module.exports = Detail

/*db.details.insert({"name": "张三", "school": "南京大学", "specialty": "电子信息工程", "pro_name": "ipad", "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550123506693&di=a79f35b81db8d7abf0f81c927ce9f95c&imgtype=0&src=http%3A%2F%2Fpic26.photophoto.cn%2F20130318%2F0037037588566112_b.jpg", "desc": "ipad 32G", "puy_date": "1533168000000", "price": 199900, "origin_price": 258800, "phone": "18856448989", "pro_num": 1, "type": 0})*/
