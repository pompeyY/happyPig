#首页详情列表
=========================
##V1版本
-------------------------
###请求方式
| 前缀 | 版本 | 请求方式 | 链接 |
| :---: | :---: | :---: | :---:|
| api | v1 | get | /happyPig/api/v1/detail |

<br/>

###请求参数

---------------------------------
|  key  |   类型   | key是否必填 | 备注 |
| :---: | :------: | :--------: | :---:|
| size | int | 是 | 一页有多少项 |
| pagenum | int | 是 | 第多少页 |

<br/>

###返回结果

----------------------------
|  key  |   类型   |  备注 |
| :---: | :------: | :---:|
| code | int | 1001:成功、1002:失败|
| msg | string | 提示语 |
| data | object | 返回的数据 |
| type | int | 0:有货、1:已售完 |
| pro_num | int | 产品数量 |

<br/>

####返回成功事例

-------------------------
```json
{
  "code": 1001,
  "data": {
    "list":[
      {
        "name": "张三",
        "school": "南京大学",
        "specialty": "电子信息工程",
        "pro_name": "ipad",
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550123506693&di=a79f35b81db8d7abf0f81c927ce9f95c&imgtype=0&src=http%3A%2F%2Fpic26.photophoto.cn%2F20130318%2F0037037588566112_b.jpg",
        "desc": "32G ipad",
        "puy_date": 1533168000000,
        "price": 199900,
        "origin_price": 258800,
        "phone": "18856448989",
        "pro_num": 1,
        "type": 0
      }
    ]
  },
  "msg": "成功"
}
```
