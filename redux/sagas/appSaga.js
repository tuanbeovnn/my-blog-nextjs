
import jwtDecode from 'jwt-decode';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import adminAction from '../actions/admin';
import * as apiRequest from "../api/index";


function* getListPost({ payload, callback }) {
    try {
        const response = yield call(apiRequest.fetchPostListRequest);
        console.log("1", response.data)
        yield put({ type: adminAction.FETCH_LIST_POST_SUCCESS, payload: response.data });
        if (typeof callback === "function") {
            callback({ success: true })
        }
    } catch (e) {
        console.log(e)
        yield put({ type: adminAction.FETCH_LIST_POST_FAILED });
        if (typeof callback === 'function') {
            callback(e);
        }
    }
}


function* getListCategory({ payload, callback }) {
    try {
        const response = yield call(apiRequest.fetchCategoryListRequest);
        yield put({ type: adminAction.FETCH_LIST_CATEGORY_SUCCESS, payload: response.data });
        if (typeof callback === "function") {
            callback({ success: true })
        }
    } catch (e) {
        console.log(e)
        yield put({ type: adminAction.FETCH_LIST_CATEGORY_FAILED });
        if (typeof callback === 'function') {
            callback(e);
        }
    }
}

function* login({ payload, callback }) {
    try {
        const response = yield call(apiRequest.loginRequest, payload);
        yield put({ type: adminAction.LOGIN_SUCCESS, payload: response.data });
        if (typeof callback === "function") {
            callback({ success: true })
        }
    } catch (e) {
        yield put({ type: adminAction.LOGIN_FAILED });
        if (typeof callback === 'function') {
            callback(e);
        }
    }
}

function* userInit({ payload, callback }) {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const userData = accessToken && jwtDecode(accessToken);
        console.log(userData)
        if (userData?.exp > Date.now() / 1000) {
            yield put({ type: adminAction.USER_INIT_SUCCESS, payload: userData });
            if (typeof callback === "function") {
                callback({ success: true })
            }
        } else {
            throw (new Error());
        }
    } catch (e) {
        yield put({ type: adminAction.USER_INIT_FAILED, payload: null });
        if (typeof callback === 'function') {
            callback(e);
        }
    }
}


function* appSaga() {
    yield all([
        yield takeEvery(adminAction.FETCH_LIST_POST, getListPost),
        yield takeEvery(adminAction.FETCH_LIST_CATEGORY, getListCategory),
        yield takeEvery(adminAction.LOGIN, login),
        yield takeEvery(adminAction.USER_INIT, userInit)
    ])
}

export default appSaga;