const userReducer = (state = { users: [], requesting: false }, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        users: action.users,
        requesting: true
      };

    default:
      return state;
  }
};

export default userReducer;
