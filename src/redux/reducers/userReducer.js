const initialState = {
  isAdmin: false,
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return state;

    case "LOG_OUT":
      return state;

    default:
      return state;
  }
};

export default userReducer;
