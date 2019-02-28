import React from 'react';
import './UserInformation.scss';
import { NavLink } from 'react-router-dom';
import {Button, Avatar, List, Icon} from 'antd';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import Cookies from 'js-cookie';

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            addList: [
                '个人资料',
                '添加宝贝',
                '已售出',
                '未售出'
            ],
            addUrl: [
                'personalData',
                'addProduct',
                'soldOut',
                'unsold'
            ]
        }
    }
    render() {
        return (
            <div className="user">
                {/* //未登录 */}
                <div className={`no_login ${this.state.showLogin === true ? '' : 'no_display'}`}>
                    <i className="iconfont icon-weidenglutouxiang"></i>
                    <p><Link to='/user/login'>立即登录</Link></p>
                    <p><Link to='/user/regist'>>>>还未有账号，立即注册!</Link></p>
                </div>
                {/* 已登录 */}
                <div className={` ${this.state.showLogin === false ? '' : 'no_display'}`}>
                <div className={`yes_login`}>
                <Avatar shape="circle" src="http://www.zt5.com/uploadfile/2019/0127/20190127010113674.jpg" alt="" size="large" className="avatar"></Avatar>
                    <List className="desc">个性签名：best!</List>
                    <List itemLayout="horizontal" dataSource={this.state.addList} 
                          renderItem={
                              (item, index) => (
                                  <Link to={`/${this.state.addUrl[index]}`}>
                                      <List.Item>
                                          <List.Item.Meta avatar={<Icon type="smile"/>} title={item}></List.Item.Meta>
                                      </List.Item>
                                   </Link>
                                  )
                          }
                    />
                </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const student_id = Cookies.get();
        console.log(student_id)
    }
}

export default UserInformation;