export const ADD_RELATIONSHIP = "ADD_RELATIONSHIP"

export const requestRelationship = relationship => ({ type: ADD_RELATIONSHIP, relationship });
export const makeRelationship = (userId) => {
  return async dispatch => {
    try {
      const reqObj = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          user_id: userId
        })
      }
      const response = await fetch("http://localhost:3001/relationships", reqObj);
      const json = await response.json();
      dispatch(requestRelationship(json));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};

export const ACCEPT_OR_DECLINE_RELATIONSHIP = "ACCEPT_OR_DECLINE_RELATIONSHIP"

export const acceptOrDeclineRelationship = relationship => ({ type: ACCEPT_OR_DECLINE_RELATIONSHIP, relationship });
export const handlePendingRelationship = (relationshipId, decision) => {
  return async dispatch => {
    try {
      const reqObj = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          relationship_id: relationshipId,
          decision: decision
        })
      }
      const response = await fetch("http://localhost:3001/relationships/decide", reqObj);
      const json = await response.json();
      dispatch(acceptOrDeclineRelationship(json));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};
