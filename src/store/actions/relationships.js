export const SELECT_RELATIONSHIP = "SELECT_RELATIONSHIP"

export const getUsers = users => ({ type: FETCH_USERS, users });
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const reqObj = {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
      const response = await fetch("http://localhost:3001/users", reqObj);
      const json = await response.json();
      console.log(json)
      const users = json.data.map(user=> user.data.attributes)
      console.log(users)
      dispatch(getUsers(users));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};