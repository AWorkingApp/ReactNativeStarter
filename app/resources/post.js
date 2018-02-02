import * as RestClient from './request';

const resourceUrl = 'https://jsonplaceholder.typicode.com/posts';

export default {
    getAll: (options = {}) => {
        let url = `${resourceUrl}`;
        return RestClient.get(url, options);
    },

    get: (id, options = {}) => {
        let url = `${resourceUrl}/${id}`;
        return RestClient.get(url, options);
    },

    post: (entity = {}, options = {}) => {
        options.data = entity;
        let url = `${resourceUrl}`;
        return RestClient.post(url, options);
    },

    put: (id, entity = {}, options = {}) => {
        options.data = entity;
        let url = `${resourceUrl}/${id}`;
        return RestClient.put(url, options);
    },

    delete: (id, options = {}) => {
        let url = `${resourceUrl}/${id}`;
        return RestClient.remove(url, options);
    }
}


