import React from 'react';
import ListShow from '../../components/ListShow/ListShow';
import GetIndexShow from '../../actions/getInfomation/GetIndexShow';

class IndexShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: []
        };
    }
    render() {
    let listHtml = this.state.listItem.map((item, index) => {
        return <ListShow key={index} value={item}></ListShow>
    })

        return (
            <div>
               {listHtml}
            </div>
        );
    }
    async componentDidMount() {
        await this.getListShow();
    }
    async getListShow() {
        const param = {
            page_num: 1,
            size: 5,  
        }
        const list = await GetIndexShow.getListShow(param)
        this.setState({
            listItem: list
        });
    }

}

export default IndexShow;