export const FETCH_USERS = "FETCH_USERS";

export const getUsers = users => ({ type: FETCH_USERS, users });
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const reqObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      const response = await fetch("http://localhost:3001/users", reqObj);
      const json = await response.json();
      console.log(json);
      const users = json.data.map(user => user.data.attributes);
      console.log(users);
      dispatch(getUsers(users));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};

export const FETCH_PROFILE = "FETCH_PROFILE";

export const getProfile = user => ({ type: FETCH_PROFILE, user });
export const fetchProfile = id => {
  console.log("fetchProfile id", id);
  return async dispatch => {
    try {
      const reqObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      const response = await fetch("http://localhost:3001/users/" + id, reqObj);
      const json = await response.json();
      const profile = json.data.data.attributes;
      dispatch(getProfile(profile));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const emptyProfile = () => ({
  type: "EMPTY_PROFILE"
});


export const FETCH_AUTH = "FETCH_AUTH";

export const getCurrentUser = current_user => ({
  type: FETCH_AUTH,
  current_user
});
export const fetchCurrentUser = () => {
  return async dispatch => {
    try {
      const reqObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      const response = await fetch("http://localhost:3001/profile", reqObj);
      const json = await response.json();
      console.log(json)
      dispatch(getCurrentUser(json));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};


export const setShowRelationship = relationship => ({
  type: "SET_SHOW_RELATIONSHIP",
  relationship
});
