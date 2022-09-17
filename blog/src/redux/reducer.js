export const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_LISTINGS":
      state = [...action.data];
      return state;
    default:
      return state;
  }
};

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_POST":
      return { ...state, ...action.data };
    case "CLEAR_POST":
        return {};
    default:
      return state;
  }
};

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return [ ...state, ...action.data ];
    case "CLEAR_COMMENTS":
      return [];
    default:
      return state;
  }
};