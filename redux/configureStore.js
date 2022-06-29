import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducer/rootReducer";
import rootSaga from "./sagas/rootSaga"; 
import { createWrapper } from "next-redux-wrapper";

const composeEnhancer = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
}) : compose;



const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleWare = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middleWare)];
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    store.startSaga = sagaMiddleware.run(rootSaga)
    return store;
};


export default createWrapper(configureStore, {debug: false});