import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from '../reducers';
import Header from './header';
import User from './User';

const UserNew = () => <div>Criando usuario novo</div>;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const App = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Route>
                    <div>
                        <Header />
                        <div className="container-fluid">
                                <Route exact path="/user" component={User} />
                                <Route path="/user/new" component={UserNew} />
                        </div>
                    </div>
                </Route>
            </BrowserRouter>
        </Provider>
    )
}

export default App;