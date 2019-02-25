import React from 'react';
import './NavBarTop.scss';
import { Icon } from 'antd';

class NavBarTop extends React.Component {
    render () {
        return (
            <div className="nav_top">
            <Icon type="left" className="icon_self"></Icon>
              {this.props.title}
            </div>
        )
    }
}

export default NavBarTop;