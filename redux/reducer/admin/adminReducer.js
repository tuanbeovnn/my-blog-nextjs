import jwt_decode from "jwt-decode";
import { HYDRATE } from "next-redux-wrapper";
import adminAction from "../../actions/admin";
const initialState = {
    posts: [],
    categories: [],
    user: {},
    newposts: [],
    trendingposts: [],
    newpostsRemaining: [],
    postDetails: {},
    tags: []

};

const reducer = (state = initialState, action) => {
    const copyState = { ...state };
    switch (action.type) {
        case HYDRATE: {
            return { ...copyState, ...action.payload.Admin, user: copyState.user }
        }
        case adminAction.FETCH_LIST_POST_SUCCESS: {
            copyState.posts = action.payload.details.list;
            return copyState;
        }
        case adminAction.FETCH_LIST_POST_FAILED: {
            return copyState;
        }

        case adminAction.FETCH_LIST_POST_NEWEST_SUCCESS: {
            copyState.newposts = action.payload.details.list;
            return copyState;
        }
        case adminAction.FETCH_LIST_POST_NEWEST_FAILED: {
            return copyState;
        }

        case adminAction.FETCH_LIST_POST_NEWEST_REMAINING_SUCCESS: {
            copyState.newpostsRemaining = action.payload.details.list;
            return copyState;
        }
        case adminAction.FETCH_LIST_POST_NEWEST_REMAINING_FAILED: {
            return copyState;
        }

        case adminAction.FETCH_LIST_POST_TRENDING_SUCCESS: {
            copyState.trendingposts = action.payload.details.list;
            return copyState;
        }
        case adminAction.FETCH_LIST_POST_TRENDING_FAILED: {
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
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            copyState.user = dataLogin;
            copyState.categories = [];
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

        case adminAction.FETCH_POST_DETAILS_SUCCESS: {
            copyState.postDetails = action.payload.details;
            return copyState;
        }
        case adminAction.FETCH_POST_DETAILS_FAILED: {
            copyState.postDetails = action.payload;
            return copyState;
        }

        case adminAction.FETCH_LIST_TAG_SUCCESS: {
            copyState.tags = action.payload.details.list;
            return copyState;
        }

        case adminAction.FETCH_LIST_TAG_FAILED: {
            return copyState;
        }


        default:
            return state;
    }
};


export default reducer;