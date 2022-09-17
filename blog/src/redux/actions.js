export const initListings = () => {
  return async (dispatch) => {
    let listings = await fetch("https://jsonplaceholder.typicode.com/posts");
    listings = await listings.json();
    dispatch({
      type: "INIT_LISTINGS",
      data: listings,
    });
  };
};

export const getPost = (id) => {
  return async (dispatch) => {
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await post.json();
    dispatch({
      type: "GET_POST",
      data: post,
    });
  };
};

export const clearPost = () => {
  return {
    type: "CLEAR_POST",
  };
};

export const getComments = (id) => {
    return async (dispatch) => {
      let comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      comments = await comments.json();
      dispatch({
        type: "GET_COMMENTS",
        data: comments,
      });
    };
  };

  export const clearComments = () => {
    return {
      type: "CLEAR_COMMENTS",
    };
  };