import axios from 'axios';

export const getUser = id => {
    return axios.get(`/user/${id}`)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}