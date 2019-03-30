import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from '../reducers';
import middlewares from '../middlewares';


function initStore(additionalMiddlewares = []) {
    const innitialStore = {};
    if (__IS_DEV__) {
        return createStore(
            initReducers,
            innitialStore,
            compose(
                applyMiddleware(...additionalMiddlewares, ...middlewares),
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            ),
        );
    }
    return createStore(
        initReducers,
        innitialStore,
        applyMiddleware(...additionalMiddlewares, ...middlewares),
    );
}

export default initStore;