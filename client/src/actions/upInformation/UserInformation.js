import axios from 'axios';
import Api from '../api';
import toQuery from 'query-string';

export default {
    async upAddProduct (param) {
        try {
            const params = toQuery.stringify(param);
        } catch(e) {
            console.log(e)
        }
    }
}