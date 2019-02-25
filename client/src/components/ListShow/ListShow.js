import React from 'react';
import './ListShow.scss';


class ListShow extends React.Component {
    render() {
        return (
            <div className="list_all">
              <img src={this.props.value.img[0]} alt={this.props.value.pro_name}/>
              <div className="list">
              <div className="list_desc">
                  <span>{this.props.value.pro_name}</span>
                  <span>￥{this.props.value.origin_price/1000}</span>
                  <span>￥{this.props.value.price/1000}</span>
              </div>
              <p>详情：{this.props.value.desc} </p>
              </div>
            </div>
        );
    }
}

export default ListShow;