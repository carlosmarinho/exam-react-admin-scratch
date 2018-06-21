import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';
import Header from './components/header';
import User from './components/User';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const Init = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Route>
                    <div>
                        <Header />
                        <Route exact path="/" component={App} />
                        <Route path="/user" component={User} />
                    </div>
                </Route>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(<Init />, document.getElementById('root'));