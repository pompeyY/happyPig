import React from 'react';
import './UserRegist.scss';
import NavBarTop from '../../components/NavBarTop/NavBarTop';
import { Input, Button, Drawer, Modal, Alert} from 'antd';
import UpUserInformation from '../../actions/upInformation/UpUserInformation';
import { judNull, setStateCom} from '../../utils/commonMethod';

class UserRegist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nick_name: '',
            email: '',
            password: '',
            password_sure: '',
            error_show: false,
            jud_null: false,
        }
    }
    render() {
        return (
            <div className="user_regist">
                <NavBarTop title="欢迎注册"></NavBarTop>
                <div className="item title_regist">*昵称：<Input placeholder="请输入昵称" value={this.state.nick_name} onChange={e => { setStateCom('nick_name', e.target.value, this) }} /></div>
                <div className="item">*邮箱：<Input placeholder="请输入邮箱" value={this.state.email} onChange={e => { setStateCom('email', e.target.value, this) }} /></div>
                <div className="item">*密码：<Input placeholder="请输入密码" type="password" value={this.state.password} onChange={(e) => { setStateCom('password', e.target.value, this) }} /></div>
                <div className="item">*再次输入密码：<Input type="password" placeholder="请再次输入密码" value={this.state.password_sure} onChange={e => { setStateCom('password_sure', e.target.value, this) }} onFocus={() => { this.setState({ error_show: false, password_sure: '' }) }} /></div>
                <Alert className={`alert_pass ${this.state.error_show ? '' : 'dis'}`} message="密码不一致,请重新输入！" type="error" showIcon />
                <div className="btn_sure"><Button size="large" className="btn" onClick={() => { this.upUserRegist() }}>确认</Button></div>
                <Alert className={`alert_pass ${this.state.jud_null ? '' : 'dis'}`} message="必填项不可为空哟！" type="error" showIcon />
            </div>
        )
    }
    async upUserRegist() {
        await this.comparePassword()
        if (!this.state.error_show) {
            const param = {
                nick_name: this.state.nick_name,
                email: this.state.email,
                password: this.state.password
            }
            setStateCom('jud_null', await judNull(param), this)
            if(!this.state.jud_null) {
                const res = await UpUserInformation.upUserRegist(param)
                if (1001 === res.data.code) {
                    Modal.success({
                        title: '恭喜你，注册成功',
                        maskClosable: false,
                        onOk() {
                            window.location.replace('/home/index')
                        }
                      })
                } else if (10004 === res.data.code){
                    let confirm_regist = Modal.confirm
                    confirm_regist({
                        title: '邮箱已被注册过！',
                        cancelText: '直接登录',
                        okText: '继续注册',
                        maskClosable: false,
                        onOk() {
                            confirm_regist.visible = false
                        },
                        onCancel() {
                            window.location.replace('/user/login')
                        }
                      })
                }
            }

        } else {
            
        }
    }
    // setStateCom(key, val, that) {
    //     that.setState({
    //         [key]: val
    //     })
    // }
    comparePassword() {
        this.setState({
            error_show: !(this.state.password === this.state.password_sure)
        })
    }
    // judNull(param) {
    //     if (param) {
    //         const jud = Object.values(param).some((item) => {
    //             return item === ''
    //         })
    //         return jud
    //     }
    // }
}

export default UserRegist;