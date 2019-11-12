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

export const FETCH_AUTH = "FETCH_AUTH";

export const getCurrentUser = user => ({
  type: FETCH_AUTH,
  user
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

/* export const addUser = (user) => {
  const ageInt = parseInt(user.age)
  const reqObj = {
    method: "POST",
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({
      age: ageInt,
      email: user.email,
      display_name: user.displayName,
      gender: user.gender,
      zip_code: user.zipCode,
      looking_for: user.lookingFor,
      bio: user.bio
    })
  }
  return dispatch => {
    dispatch({ type: 'START_ADDING_USER_REQUEST' });
    fetch('http://localhost:3001/sign_up', reqObj)
      .then(response => response.json())
      .then(user => dispatch({ type: 'ADD_USER', user }));
  };
} */
