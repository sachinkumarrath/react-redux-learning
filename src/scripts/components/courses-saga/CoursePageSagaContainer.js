import React, {PropTypes, Component} from 'react';
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as courseActions from "./actions/courseActions";
import CoursePage from './CoursePageSaga';

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         createCourse: course => dispatch(courseActions.createCourse(course))
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);