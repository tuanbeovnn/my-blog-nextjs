import { AxiosService } from "../../utils";


export const fetchPostListRequest = () => {
    return AxiosService.get(`/posts/all`);
}

export const fetchCategoryListRequest = () => {
    return AxiosService.get(`/categories`);
}
