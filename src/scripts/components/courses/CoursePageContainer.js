import React, {PropTypes, Component} from 'react';
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {
    createCourse,
    completeCourse,
    makeCourseEligible
} from "./actions/courseActions";
import CoursePage from './CoursePage';

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
    return bindActionCreators({
        createCourse,
        completeCourse,
        makeCourseEligible
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);