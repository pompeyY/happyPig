# 首页详情列表

## V1版本

### 请求方式

| 前缀 | 版本 | 请求方式 | 链接 |
| :---: | :---: | :---: | :---:|
| api | v1 | get | /happy_pig/api/v1/detail/pro_del |

<br/>

### 请求参数

---------------------------------
|  key  |   类型   | key是否必填 | 备注 |
| :---: | :------: | :--------: | :---:|
| pro_id | int | 是 | id号 |

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