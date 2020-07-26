import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './client/components/App';
import MovieDetail from './client/containers/moviedetail/index';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path='/movie/:id' component={MovieDetail}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
