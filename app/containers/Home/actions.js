
export const FINISH_LOADING = 'FINISH_LOADING';
export const LOADING_REQUEST = 'LOADING_REQUEST';

export function finishLoading(){
    return {
        type: FINISH_LOADING
    }
}

export function loadingRequest(){
    return {
        type: LOADING_REQUEST
    }
}