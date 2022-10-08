export const loadUserInfo = () => {
  return {
    type: "GET_USER_INFO",
  };
};

export const loadUserInfoSuccess = (data: any) => {
  return {
    type: "GET_USER_INFO_SUCCESS",
    data,
  };
};

export const loadUserInfoFail = () => {
  return {
    type: "GET_USER_INFO_FAIL",
  };
};

const userInfoReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "GET_USER_INFO_SUCCESS":
      return { ...state, ...action.data };

    case "GET_USER_INFO_FAIL":
      return {};

    default:
      return state;
  }
};

export default userInfoReducer;
