export function createCourse(course) {
    return {type: "CREATE_COURSE", course};
}
export function completeCourse(course) {
    return {type: "COMPLETE_COURSE", course};
}
export function makeCourseEligible(course) {
    return {type: "ADD_TO_ELIGIBLE", course};
}
