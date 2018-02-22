
import axios from 'axios';

import * as AuthRepo from './auth/authRepo';

export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

export function _get(url, options = {}) {
    return request({
        method: METHODS.GET,
        url: url,
        ...options
    });
}

export function _post(url, options = {}) {
    return request({
        method: METHODS.POST,
        url: url,
        ...options
    });
}

export function _put(url, options = {}) {
    return request({
        method: METHODS.PUT,
        url: url,
        ...options
    });
}

export function _remove(url, options = {}) {
    return request({
        method: METHODS.DELETE,
        url: url,
        ...options
    }, useAuth);
}

export function request(options) {
    if(!options.headers){
        options.headers = {};
    }

    _fillDefaultHeaders(options.headers);

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

export default function RestClient(resourceUrl) {
    return {
        getAll: (options = {}) => {
            let url = `${resourceUrl}`;
            return _get(url, options);
        },

        get: (id, options = {}) => {
            let url = `${resourceUrl}/${id}`;
            return _get(url, options);
        },

        post: (entity = {}, options = {}) => {
            options.data = entity;
            let url = `${resourceUrl}`;
            return _post(url, options);
        },

        put: (id, entity = {}, options = {}) => {
            options.data = entity;
            let url = `${resourceUrl}/${id}`;
            return _put(url, options);
        },

        delete: (id, options = {}) => {
            let url = `${resourceUrl}/${id}`;
            return _remove(url, options);
        }
    }
}

const _fillDefaultHeaders = (headers) => {
    const typeJson = `application/json`;
    if (_isEmptyHeader(headers['Accept'])) {
        headers['Accept'] = typeJson;
    }

    if (_isEmptyHeader(headers['Content-Type'])) {
        headers['Content-Type'] = typeJson;
    }
}

const _isEmptyHeader = (header) => {
    return !header || _isEmptyObject(header);
}

// internal helper function
const _isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
