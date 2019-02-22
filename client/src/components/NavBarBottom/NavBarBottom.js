import React from 'react';
import './NavBarBottom.scss';
import { NavLink} from 'react-router-dom';

class NavBarBottom extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            navList: ['首页','分类','发现','我的'],
            navImg: ['shouye','icon','faxian','me'],
            navName: ['index', 'classify', 'find', 'my'],
            judColor: 0,
        }
    }
    render() {
        let ListHtml = this.state.navList.map((item, index) => {
            return (
                <NavLink to={`/home/${this.state.navName[index]}`} key={index} activeClassName="click_color">
                    <div>
                        <i className={`iconfont icon-${this.state.navImg[index]}`}></i>
                        <span>{item}</span>
                    </div>
                </NavLink>
            )
        })
        return (
            <div className="nav">
              {ListHtml}
            </div>
        )
    }
}

export default NavBarBottom;