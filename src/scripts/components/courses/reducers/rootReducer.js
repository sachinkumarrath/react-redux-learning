import {combineReducers} from 'redux';
import courses from './courseReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    courses,
    visibilityFilter
});

export default rootReducer;
