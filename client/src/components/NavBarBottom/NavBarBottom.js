import React from 'react';
import './NavBarBottom.scss';

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
                <div key={index} onClick={() => {this.changeBar(index)}} className={this.state.judColor === index ? 'click_color' : ''}>
                    <i className={`iconfont icon-${this.state.navImg[index]}`}></i>
                    <span>{item}</span>
                </div>
            )
        })
        return (
            <div className="nav">
              {ListHtml}
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