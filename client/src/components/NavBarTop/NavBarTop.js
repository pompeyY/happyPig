import React from 'react';
import './NavBarTop.scss';

class NavBarTop extends React.Component {
    render () {
        return (
            <div className="nav_top">
              {this.props.title}
            </div>
        )
    }
}

export default NavBarTop;