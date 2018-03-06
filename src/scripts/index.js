import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Base from './components/react-sample/baseContainer';
import CoursePage from './components/courses/CoursePageContainer';
import CoursePageSaga from './components/courses-saga/CoursePageSagaContainer';
import FileUploader from "./components/file-uploader/FileUploaderContainer";
import configureStore from "./configureStore";

const store = configureStore();
const routeApp = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Base}/>
            <Route path="/courses" component={CoursePage}/>
            <Route path="/course-saga" component={CoursePageSaga}/>
            <Route path="/file-upload" component={FileUploader}/>
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
