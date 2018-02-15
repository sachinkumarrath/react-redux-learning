import {combineReducers} from "redux";

import fileUploader from "./fileUploaderReducer";

const reducer = combineReducers({
    fileUploader
});

export default reducer;
