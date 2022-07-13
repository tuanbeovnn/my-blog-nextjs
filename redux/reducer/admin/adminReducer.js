import jwt_decode from "jwt-decode";
import { HYDRATE } from "next-redux-wrapper";
import adminAction from "../../actions/admin";
const initialState = {
    posts: [],
    categories: [],
    user: {}

};

const reducer = (state = initialState, action) => {
    const copyState = { ...state };
    switch (action.type) {
        case HYDRATE: {
            return { ...copyState, ...action.payload.Admin }
        }
        case adminAction.FETCH_LIST_POST_SUCCESS: {
            copyState.posts = action.payload.details.list;
            return copyState;
        }
        case adminAction.FETCH_LIST_POST_FAILED: {
            return copyState;
        }

        case adminAction.FETCH_LIST_CATEGORY_SUCCESS: {
            copyState.categories = action.payload.details;
            return copyState;
        }

        case adminAction.FETCH_LIST_CATEGORY_FAILED: {
            return copyState;
        }

        case adminAction.LOGIN_SUCCESS: {
            const dataLogin = jwt_decode(action.payload.accessToken);
            console.log(dataLogin);
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            copyState.user = dataLogin;
            copyState.categories = [];
            console.log("1111", copyState)
            return copyState;
        }
        case adminAction.LOGIN_FAILED: {
            return copyState;
        }

        case adminAction.USER_INIT_SUCCESS: {
            copyState.user = action.payload;
            return copyState;
        }
        case adminAction.USER_INIT_FAILED: {
            copyState.user = action.payload;
            return copyState;
        }

        default:
            return state;
    }
};


export default reducer;