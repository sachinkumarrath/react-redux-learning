import React, {PropTypes, Component} from "react";
import {Provider, connect} from "react-redux";
import {bindActionCreators} from "redux";

import FileUploader from "./FileUploader";

export default connect()(FileUploader);
