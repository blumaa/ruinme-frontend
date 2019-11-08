export const FETCH_USERS = "FETCH_USERS";

export const getUsers = users => ({ type: FETCH_USERS, users });
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3001/users')
      const json = await response.json();
      dispatch(getUsers(json));
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };
};
