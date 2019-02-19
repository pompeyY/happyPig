import React from 'react';
import './NavBarBottom.scss';
import { Router, Route, Link, Redirect} from 'react-router-dom';
import IndexShow from '../../pages/IndexShow/IndexShow';
import UserInformation from '../../pages/UserInformation/UserInformation';

class NavBarBottom extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            navList: ['首页','分类','发现','我的'],
            navImg: ['shouye','icon','faxian','me'],
            judColor: 0,
        }
        this.changeBar = this.changeBar.bind(this);
    }
    render() {
        let ListHtml = this.state.navList.map((item, index) => {
            return (
                // <Link to="/1" key={index} >
                    <div onClick={() => {this.changeBar(index)}} className={this.state.judColor === index ? 'click_color' : ''}>
                        <i className={`iconfont icon-${this.state.navImg[index]}`}></i>
                        <span>{item}</span>
                    </div>
                // </Link>
                
            )
        })
        return (
            <div className="nav">
              {ListHtml}
              <Link to='/22'><span>1111</span></Link>
              
            </div>
        )
    }

    changeBar(index) {
        this.setState({
            judColor: index
        });
    }
}

export default NavBarBottom;