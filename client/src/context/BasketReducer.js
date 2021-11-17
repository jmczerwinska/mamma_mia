export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return [action.payload, ...state];
        case "REMOVE_FROM_BASKET":
            return state.filter((el, index) => index !== action.payload);
        case "RESET_BASKET":
            return [];
        default:
            return state;
    }
}