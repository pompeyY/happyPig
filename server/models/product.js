const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  stu_number: { // 学号
    type: Number,
    required: true
  },
  name: {     // 姓名
    type: String,
    required: true
  },
  pro_name: { // 产品名称
    type: String,
    required: true
  },
  img: {    // 产品图片
    type: String,
    default: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550124487994&di=573e74203ebe8dc99c72a01c1602a9e7&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-08%2F041717696.jpg"
  },
  desc: {  // 产品描述
    type: String,
    required: true
  },
  puy_date: { // 产品购买日期
    type: Number,
    required: true
  },
  price: {  // 产品价格
    type: Number,
    required: true
  },
  origin_price: {  // 产品初始购买价格
    type: Number,
    required: true
  },
  pro_num: { //  产品数量
    type: Number,
    required: true
  },
  status: {  // 产品状态 0为有货，1为已售完
    type: Number,
    required: true
  },
  pro_type: { // 产品类型
    type: String,
    required: true
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product

/*db.products.insert({"stu_number": "20150902033", "name": "张三2", "pro_name": "ipad", "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550123506693&di=a79f35b81db8d7abf0f81c927ce9f95c&imgtype=0&src=http%3A%2F%2Fpic26.photophoto.cn%2F20130318%2F0037037588566112_b.jpg", "desc": "ipad 32G", "puy_date": "1533168000000", "price": 199900, "origin_price": 258800, "pro_num": 1, "status": 0, "pro_type": "数码"})*/
