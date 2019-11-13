const reviewReducer = (state = { reviews: [], requesting: false }, action) => {
  switch (action.type) {
    case "POST_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.review],
        requesting: true
      };

    case "GET_REVIEWS":
      return {
        ...state,
        currentUserReviews: action.reviews,
        requesting: true
      };

    default:
      return state;
  }
};

export default reviewReducer;
