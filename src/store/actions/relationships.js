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
