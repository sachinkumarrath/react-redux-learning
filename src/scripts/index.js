import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Base from './components/react-sample/baseContainer';
import CoursePage from './components/courses/CoursePageContainer';
import CoursePageSaga from './components/courses-saga/CoursePageSagaContainer';

const routeApp = (
    <Router history={hashHistory}>
        <Route path="/" component={Base}/>
        <Route path="/courses" component={CoursePage}/>
        <Route path="/course-saga" component={CoursePageSaga}/>
    </Router>
);

ReactDOM.render(
    routeApp,//<Base/>,
    document.getElementById('root'),
    completionReactLoad
);

function completionReactLoad(){
    console.timeEnd('react-app');
}
