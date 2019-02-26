# 添加学生信息

## V1版本

### 请求方式
| 前缀 | 版本 | 请求方式 | 链接 |
| :---: | :---: | :---: | :---:|
| api | v1 | post | /happy_pig/api/v1/user/add_user_info |

<br/>

### 请求参数

---------------------------------
|  key  |   类型   | key是否必填 | 备注 |
| :---: | :------: | :--------: | :---:|
| student_id | int | 是 | 学生id |
| name | string | 是 | 学生姓名 |
| school | string | 是 | 学校 |
| specialty | string | 是 | 专业 |
| phone | string | 是 | 手机 |
| stu_number | string | 是 | 学号 |
| qq_num | string | 否 | qq好 |
| avatar | string | 否 | 头像 |
| birth_date | int | 否 | 出生日期 |
| signature | string | 否 | 签名 |

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
