import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';

import CoursePage from './CoursePageSaga';
import configureStore from './store/configureStore';

export default class CoursePageContainer extends Component {
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
