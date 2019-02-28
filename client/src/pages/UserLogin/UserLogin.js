import React from 'react';
import './UserLogin.scss';
import NavBarTop from '../../components/NavBarTop/NavBarTop';
import { Input, Button, Alert, Modal } from 'antd';
import { judNull, setStateCom } from '../../utils/commonMethod';
import UpUserInformation from '../../actions/upInformation/UpUserInformation';

class UserLogin extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '',
                password: '',
                jud_null: false,
                email_no: false,
                param_error: false
            }
        }
        render() {
            return (
                <div className="user_login">
                    <NavBarTop title="欢迎登录"></NavBarTop>
                    <div className="item title_login">*邮箱：<Input placeholder="请输入邮箱" value={this.state.email} onChange={e => { setStateCom('email', e.target.value, this) }} onFocus={() => {this.setState({email_no: false,jud_null: false,param_error: false})}}/></div>
                    <Alert className={`alert_pass ${this.state.email_no ? '' : 'dis'}`} message="邮箱未注册" type="error" showIcon />
                    <div className="item">*密码：<Input placeholder="请输入密码" type="password" value={this.state.password} onChange={(e) => { setStateCom('password', e.target.value, this) }} /></div>
                    <div className="btn_sure"><Button size="large" className="btn" onClick={() => { this.upUserlogin() }}>确认</Button></div>
                    <Alert className={`alert_pass ${this.state.jud_null ? '' : 'dis'}`} message="必填项不可为空哟！" type="error" showIcon />
                    <Alert className={`alert_pass ${this.state.param_error ? '' : 'dis'}`} message="邮箱或密码错误" type="error" showIcon />
                </div>
            )
        }
        async upUserlogin() {
            const param = {
                email: this.state.email,
                password: this.state.password
            }
            setStateCom('jud_null', await judNull(param), this)
            if (!this.state.jud_null) {
                const res = await UpUserInformation.upUserLogin(param)
                if (1001 === res.data.code) {
                    Modal.success({
                        title: '恭喜你，登录成功',
                        maskClosable: false,
                        onOk() {
                            window.location.replace('/home/index')
                        }
                      })
                } else if (10004 === res.data.code) {
                    setStateCom('email_no', true, this)
                } else if (10005 === res.data.code) {
                    setStateCom('param_error', true, this)
                }
            }

        }
    }

export default UserLogin;