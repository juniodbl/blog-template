import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { postReducer } from './structure/posts/posts.reducer';
import { popularPostsReducer } from './structure/popularPosts/popularPosts.reducer';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({
    posts: postReducer,
    popularPosts: popularPostsReducer
}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();