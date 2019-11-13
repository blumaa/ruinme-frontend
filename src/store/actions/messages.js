
export const POST_MESSAGE = "POST_MESSAGE";

export const sendMessage = content => ({
  type: POST_MESSAGE,
  content
});
export const postMessage = (content, relationship_id) => {
  return async dispatch => {
    try {
      const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          content,
          relationship_id
        })
      };
      const response = await fetch("http://localhost:3001/relationships/messages", reqObj);
      const json = await response.json();
      console.log(json)
      dispatch(sendMessage(json));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};
