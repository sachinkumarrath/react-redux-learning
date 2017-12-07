import React, {PropTypes, Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// import * as courseActions from "./actions/courseActions";
import {
    createCourse,
    completeCourse,
    makeCourseEligible
} from "./actions/courseActions";

class CoursesPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            title : ""
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        // this.completeCourse = this.completeCourse.bind(this, index);
    }

    completeCourse(title, event) {
        this.props.completeCourse(title);
    }

    onTitleChange(event) {
        const title = event.target.value;
        this.setState({title: title});
    }

    onClickSave() {
        // connect will create autiomatically and pass through props if there is no mapDispatchToProps
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        // this.props.createCourse(this.state.course);
        // for bindActionCreators
        this.props.createCourse(this.state.title);
        this.setState({title: ""});
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {
                    this.props.courses.map((course, index) => {
                        let className = "";
                        if (course.completed) {
                            className = "striked-course";
                        }
                        return <div className={className} key={index} onClick={this.completeCourse.bind(this, course.title)}>{course.title}</div>
                    })
                }
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
