# 首页详情列表

## V1版本

### 请求方式

| 前缀 | 版本 | 请求方式 | 链接 |
| :---: | :---: | :---: | :---:|
| api | v1 | post | /happy_pig/api/v1/detail/add_product |

<br/>

### 请求参数

---------------------------------
|  key  |   类型   | key是否必填 | 备注 |
| :---: | :------: | :--------: | :---:|
| img | array | 是 | 封面图 |
| stu_number | string | 是 | 学号 |
| student_id | int | 否 | 学生id |
| desc | string | 是 | 描述 |
| puy_date | int | 是 | 购买日期 传时间戳 |
| price | int | 是 | 价格， 按分传 |
| origin_price | int | 是 | 原价， 按分传 |
| pro_num | int | 是 | 产品数量 需大于等于1 |
| pro_type | string | 是 | 产品种类 |
| status | int | 否 | 产品状态 0为有货，1为已售完
| pro_name | string | 是 | 产品名称

<br/>

### 返回结果

----------------------------
|  key  |   类型   |  备注 |
| :---: | :------: | :---:|
| code | int | 1001:成功、1002:失败|
| msg | string | 提示语 |
| data | object | 返回的数据 |


<br/>

#### 返回成功事例

-------------------------
```json
{
  "code": 1001,
  "data": {},
  "msg": "成功"
}
```
