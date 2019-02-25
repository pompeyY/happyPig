import axios from 'axios';
import Api from '../api';
import toQuery from 'query-string';

export default {
    async upAddProduct (param) {
        try {
            // const params = toQuery.stringify(param);
            console.log(param);
            let url = `${Api.upAddProduct}`
            let res = await axios.post(url, param)
            console.log(res,33333)
            return res
        } catch(e) {
            console.log(e)
        }
    }
}