
import axios from 'axios';

import * as AuthRepo from './auth/authRepo';

export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

export function get(url, options = {}) {
    return request({
        method: METHODS.GET,
        url: url,
        ...options
    });
}

export function post(url, entity = {}, options = {}) {
    options.data = entity;
    return request({
        method: METHODS.POST,
        url: url,
        ...options
    });
}

export function put(url, entity = {}, options = {}) {
    options.data = entity;
    return request({
        method: METHODS.PUT,
        url: url,
        ...options
    });
}

export function remove(url, options = {}) {
    return request({
        method: METHODS.DELETE,
        url: url,
        ...options
    }, useAuth);
}


export default function request(options) {
    if(!options.headers){
        options.headers = {};
    }

    _fillDetaultHeaders(options.headers);

    let auth = AuthRepo.getAuth();
    if(auth){
        options.headers['Authorization'] = auth.token;
    }

    // add bearer token if we need
    return axios(options).then((response) => {
        // console.log(response);
        return { data: response.data, status: response.status };
    }).catch ((e) => {
        throw e;
    });
}

// internal helper function
function _isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

const _fillDetaultHeaders = (headers) => {
    const typeJson = `application/json`;
    if (!headers['Accept']) {
        headers['Accept'] = typeJson;
    }

    if (!headers['Content-Type']) {
        headers['Content-Type'] = typeJson;
    }
}