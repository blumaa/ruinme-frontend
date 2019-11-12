const userReducer = (state = { all: [], requesting: false }, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
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
        current_user: action.current_user.user,
        relationships: action.current_user.relationships,
        requesting: true
      };
    case "ADD_RELATIONSHIP":
      return {
        ...state,
        relationships: [...state.relationships, action.relationship],
        requesting: true
      };
      case "ACCEPT_OR_DECLINE_RELATIONSHIP":
        const relationships = state.relationships.filter(rel => !(rel.relationship_id === action.relationship.relationship_id))
        return {
          ...state,
          relationships: [...relationships, action.relationship],
          requesting: true
        };

    default:
      return state;
  }
};

export default userReducer;
