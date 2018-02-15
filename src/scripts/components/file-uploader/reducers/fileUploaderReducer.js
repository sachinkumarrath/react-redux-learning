export default function fileUploaderReducer(state = [], action) {
    switch (action.type) {
        case "UPLOAD_FILE":
            return [...state, Object.assign({}, action.files)];
        default:
            return state;
    }
}
