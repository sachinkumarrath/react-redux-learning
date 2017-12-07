export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, {title: action.course}];
        case "ADD_TO_ELIGIBLE":
            return state.map((course) => {
                if(course.title === action.course) {
                    return Object.assign({}, course, {
                        eligible: true
                    });
                }
                return course;
            });
        case "COMPLETE_COURSE":
            return state.map((course) => {
                if(course.title === action.course) {
                    return Object.assign({}, course, {
                        completed: true
                    });
                }
                return course;
            });
        default:
            return state;
    }
}
