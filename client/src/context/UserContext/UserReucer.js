export default function UserReducer(state, action) {
  switch (action.type) {
    case "SAVE_USER":
      return action.payload;
    case "UPDATE_USER":
      return {...state, ...action.payload};
    case "RESET_USER":
      return null;
    default:
      return state;
  }
}
