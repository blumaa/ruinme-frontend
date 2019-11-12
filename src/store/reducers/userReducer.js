const userReducer = (state = { all: [], requesting: false }, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        all: action.users,
        requesting: true
      };
    case "FETCH_PROFILE":
      return {
        ...state,
        profile: action.user,
        requesting: true
      };
    case "FETCH_AUTH":
      return {
        ...state,
        current_user: action.user.user,
        relationships: action.user.relationships,
        requesting: true
      };
    default:
      return state;
  }
};

export default userReducer;
