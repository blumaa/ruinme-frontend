const userReducer = (state = { all: [], requesting: false }, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        all: action.users,
        requesting: true
      };
    case "ADD_USER":
      return {
        ...state,
        users: action.user,
        requesting: false
      };
    default:
      return state;
  }
};

export default userReducer;
