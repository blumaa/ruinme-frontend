export const POST_REVIEW = "POST_REVIEW";

export const sendMessage = review => ({
  type: POST_REVIEW,
  review
});

export const makeReview = (user_id, payload) => {
  return async dispatch => {
    try {
      const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          comment: payload.comment,
          user_id
        })
      };
      const response = await fetch("http://localhost:3001/reviews", reqObj);
      const json = await response.json();
      console.log(json)
      dispatch(sendMessage(json));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const GET_REVIEWS = "GET_REVIEWS";

export const getReviews = reviews => ({
  type: GET_REVIEWS,
  reviews
});

export const fetchReviews = () => {
  return async dispatch => {
    try {
      const reqObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      const response = await fetch("http://localhost:3001/reviews", reqObj);
      const json = await response.json();
      console.log(json)
      dispatch(getReviews(json.reviews));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};
