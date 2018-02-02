
export const GET_POST_RESOURCE = 'GET_POST_RESOURCE';
export const GET_POSTS_RESOURCE = 'GET_POSTS_RESOURCE';

export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export function getPost(id){
    return {
        type: GET_POST_RESOURCE,
        id
    }
}

export function getPosts(){
    return {
        type: GET_POSTS_RESOURCE,
    }
}

export function getPostSuccess(post){
    return {
        type: GET_POST_SUCCESS,
        post
    }
}

export function getPostsSuccess(posts){
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}