import axios from 'axios';
import jwt_decode from "jwt-decode";


export const API_ENDPOINT = 'http://bienhoa.ga:8080/v1/api'
// export const API_ENDPOINT = 'http://localhost:8080/api'
class AxiosServer {

    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    getConfig(IsAuth, customHeader) {
        let token = ""
        let tokenAdmin = "";
        try {
            token = localStorage.getItem('accessToken');
            tokenAdmin = localStorage.getItem('tokenAdmin');
        } catch (e) {

        }
        const headers = {
            "Authorization": "Basic Y2xpZW50X2lkOmNsaWVudF9zZWNyZXQ=",
            'Content-Type': 'application/json',
            "Accept": "*/*",
            ...customHeader
        }
        if (IsAuth) {
            if (token || tokenAdmin) {
                const userData = jwt_decode(token || tokenAdmin);
                if (userData && userData.exp > Date.now() / 1000) {
                    headers.Authorization = tokenAdmin ? 'Bearer ' + tokenAdmin : 'Bearer ' + token
                }
            }
        }
        const config = {
            baseURL: API_ENDPOINT,
            headers: headers
        };
        return config;

    }


    handleSuccess(response) {
        return response;
    }

    handleError(err) {
        return Promise.reject(err);
    }

    getWithoutAuth(url) {
        return this.instance.get(url, this.getConfig(false));
    }

    get(url) {
        return this.instance.get(url, this.getConfig(true));
    }

    post(url, body, headerCustom) {
        return this.instance.post(url, body, this.getConfig(true, headerCustom));
    }

    postWithoutAuth(url, body, config) {
        return this.instance.post(url, body, this.getConfig(false));
    }

    delete(url, headerCustom) {
        return this.instance.delete(url, this.getConfig(true, headerCustom));
    }



}

export default new AxiosServer();