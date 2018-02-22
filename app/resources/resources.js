import RestClient from './request';

/**
 * Post Resource
 */
const postResourceUrl = 'https://jsonplaceholder.typicode.com/posts';
export const postResource = RestClient(postResourceUrl);