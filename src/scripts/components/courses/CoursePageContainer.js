import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';

import CoursePage from './CoursePage';
import configureStore from './store/configureStore';

export default class CoursePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <CoursePage/>
            </Provider>
        );
    }
}
