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
      console.log(action.relationship.pending)
      if (action.relationship.decision == 'accepted') {
        const relationships = state.relationships.filter(rel => !(rel.relationship_id === action.relationship.relationship_id))
        return {
          ...state,
          relationships: [...relationships, action.relationship],
          requesting: true
        };
      } else if (action.relationship.decision == 'declined') {
        const relationships = state.relationships.filter(rel => !(rel.relationship_id === action.relationship.relationship_id))
        return {
          ...state,
          relationships: [...relationships],
          requesting: true
        };
      }

    default:
      return state;
  }
};

export default userReducer;
