import {combineReducers} from 'redux';
import courses from './components/courses/reducers/courseReducer';
import visibilityFilter from './components/courses/reducers/visibilityFilter';
import coursesSaga from './components/courses-saga/reducers/courseReducer';
import fileUploader from "./components/file-uploader/reducers/fileUploaderReducer";

const rootReducer = combineReducers({
    courses,
    visibilityFilter,
    coursesSaga,
    fileUploader
});

export default rootReducer;
