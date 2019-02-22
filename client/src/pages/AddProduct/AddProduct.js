import React from 'react';
import {Icon, Upload, Modal, Input, InputNumber, DatePicker, Select, Button} from 'antd';
import NavBarTop from '../../components/NavBarTop/NavBarTop';
import './AddProduct.scss';

class AddProduct extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            price: 1,
            origin_price: 1,
            pro_num: 1,
            pro_type: 1,
            pro_name: '',
            desc: '',
            fileList: [],
             proType: [
                 '书籍',
                 '电子产品',
                 '化妆品',
                 '服装',
                 '背包',
                 '运动装备',
             ]
          };
        
    }
    render () {
        const uploadButton = (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">上传图片</div>
            </div>
          );
          const { previewVisible, previewImage, fileList } = this.state;
          const { TextArea } = Input;
          const Option = Select.Option;
          const selectHtml = this.state.proType.map((item, index) => {
              return <Option value={item} key={index}>{item}</Option>
          })
        return (
            <div className="add_pro">
                <NavBarTop title="添加宝贝"></NavBarTop>
                <div>
                    <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                   {fileList.length >= 3 ? null : uploadButton}
                   </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <div className="add_item">
                    <div className="item">商品名称：<Input placeholder="请输入商品名称"  value={this.state.pro_name} onChange={(e) => {this.setState({pro_name: e.target.value})}}/></div>
                    <div className="item">商品描述：<TextArea placeholder="请输入商品描述" autosize={{ minRows: 2, maxRows: 6 }}  value={this.state.desc} onChange={(e) => {this.setState({desc: e.target.value})}}/></div>
                    <div className="item">商品原价：<InputNumber decimalSeparator="2" value={this.state.origin_price} onChange={(value) => {this.setState({origin_price: value})}} min={1}/></div>
                    <div className="item">商品现价：<InputNumber min={1}  decimalSeparator="2" value={this.state.price} onChange={(value) => {this.setState({price: value})}}/></div>
                    <div className="item">购买日期：<DatePicker   value={this.state.puy_date} onChange={(date, dateString) => {this.setState({puy_date: date}); console.log(dateString, 111111111)}}/></div>
                    <div className="item">产品种类：
                        <Select>{selectHtml}</Select>
                    </div>
                </div>
                <div  className="btn_sure">
                    <Button size="large" onClick={() => {this.submitAddProduct()}}>确认添加</Button>
                </div>              
            </div>
        )
    }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    }
    handleChange = ({ fileList, file }) => {
        this.setState({ fileList})
        }

    submitAddProduct () {
        console.log(11111);
    }
}

export default AddProduct;