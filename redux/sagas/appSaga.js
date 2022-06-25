
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


function* appSaga() {
    yield all([yield takeEvery(adminAction.FETCH_LIST_POST, getListPost)])
}

export default appSaga;