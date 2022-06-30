
import wrapper from "../redux/configureStore";
import { END } from "redux-saga";
import typeAction from '../redux/actions/admin';

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {

    console.log("11111",store)
    store.dispatch({
        type: typeAction.FETCH_LIST_POST,
    })

    store.dispatch({
        type: typeAction.FETCH_LIST_CATEGORY,
    })
    store.dispatch(END)
    await store.startSaga.toPromise()

})