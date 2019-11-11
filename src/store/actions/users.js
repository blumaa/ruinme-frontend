export const FETCH_USERS = "FETCH_USERS";

export const getUsers = users => ({ type: FETCH_USERS, users });
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const json = await response.json();
      dispatch(getUsers(json));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};


export const addUser = (user) => {
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
}
