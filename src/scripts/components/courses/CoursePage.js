import React, {PropTypes, Component} from 'react';
import {connect} from "react-redux";

// import * as courseActions from "./actions/courseActions";

export default class CoursePage extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            title : ""
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.completeCourse = this.completeCourse.bind(this);
    }

    completeCourse(event) {
        this.props.completeCourse(event.target.getAttribute("data-title"));
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
                        // return <div className={className} key={index} onClick={this.completeCourse.bind(this, course.title)}>{course.title}</div>
                        return <div className={className} data-title={course.title} key={index} onClick={this.completeCourse}>{course.title}</div>
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

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired
};