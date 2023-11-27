import request from '../utils/request';
import config from '../config/config.js'
let baseUrl = config.baseUrl;

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const logout = query => {
    return request({
        url: `${baseUrl}/user/login`,
        method: 'get',
        params: query
    });
};


