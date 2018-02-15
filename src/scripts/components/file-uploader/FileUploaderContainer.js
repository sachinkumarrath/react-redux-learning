import React, {PropTypes, Component} from "react";
import {Provider} from "react-redux";

import FileUploader from "./FileUploader";
import configureStore from "./configureStore";

export default class FileUploaderContainer extends Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <div>fileUploader</div>
            </Provider>
        );
    }
}
