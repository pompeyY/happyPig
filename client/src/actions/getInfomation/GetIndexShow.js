import axios from 'axios';
import Api from '../api';
import toQuery from 'query-string';

export default { 
    async getListShow (param) {
        try {
            const params = toQuery.stringify(param);
            let url = `${Api.getAllDetail}?${params}`;
            let res = await axios.get(url)
            return res.data.data.list;
        } catch(e) {
            console.log(e)
        }
    }
}