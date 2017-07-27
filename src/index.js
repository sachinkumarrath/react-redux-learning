import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Base from './scripts/baseContainer';
import CoursePage from './scripts/CoursesPage';

const store = configureStore();

const routeApp = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Base}/>
            <Route path="/courses" component={CoursePage}/>
        </Router>
    </Provider>
 );

ReactDOM.render(
  routeApp,//<Base/>,
  document.getElementById('root'),
  completionReactLoad
);

function completionReactLoad(){
    console.timeEnd('react-app');
}
