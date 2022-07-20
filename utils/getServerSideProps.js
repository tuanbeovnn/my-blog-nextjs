
import wrapper from "../redux/configureStore";
import { END } from "redux-saga";
import typeAction from '../redux/actions/admin';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {

    store.dispatch({
        type: typeAction.FETCH_LIST_POST_NEWEST,
    })

    // store.dispatch({
    //     type: typeAction.FETCH_POST_DETAILS,
    // })

    store.dispatch({
        type: typeAction.FETCH_LIST_POST_NEWEST_REMAINING,
    })

    store.dispatch({
        type: typeAction.FETCH_LIST_POST_TRENDING,
    })

    store.dispatch({
        type: typeAction.FETCH_LIST_POST,
    })

    store.dispatch({
        type: typeAction.FETCH_LIST_CATEGORY,
    })
   
    store.dispatch(END)
    await store.startSaga.toPromise()

})