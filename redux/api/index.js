import { AxiosService } from "../../utils";


export const fetchPostListRequest = () => {
    return AxiosService.get(`/posts/all`);
}

export const fetchCategoryListRequest = () => {
    return AxiosService.get(`/categories`);
}


export const loginRequest = (body) => {
    return AxiosService.postWithoutAuth(`/auth/signin`, body);
}

export const fetchPostListNewestRequest = () => {
    return AxiosService.get(`/posts/newest`);
}

export const fetchPostListTrendingRequest = () => {
    return AxiosService.get(`/posts/trending`);
}

export const fetchPostListRemainingRequest = () => {
    return AxiosService.get(`/posts/newpost-remaining`);
}


export const fetchCategoryList = () => {
    return AxiosService.get(`/categories`);
}

export const fetchPostDetails = (postId) => {
    return AxiosService.get(`/posts/${postId}`);
}
