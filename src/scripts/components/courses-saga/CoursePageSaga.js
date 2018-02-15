import React, {PropTypes, Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as courseActions from "./actions/courseActions";

class CoursesPage extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            course : {title: ""}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // connect will create autiomatically and pass through props if there is no mapDispatchToProps
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        // this.props.createCourse(this.state.course);
        // for bindActionCreators
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map((course, index) => <div key={index}>{course.title}</div>)}
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.object.isRequired
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
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
