import { HYDRATE } from "next-redux-wrapper";
import adminAction from "../../actions/admin";
const initialState = {
    posts: [],
    categories: []

};

const reducer = (state = initialState, action) => {
    const copyState = { ...state };
    switch (action.type) {
        case HYDRATE: {
            // if(action.payload?.Admin?.posts.length) {
            return { ...copyState, ...action.payload.Admin }
            // }
            // return copyState;
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

        default:
            return state;
    }
};


export default reducer;