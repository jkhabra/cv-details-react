
export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const SET_USER_DATA = "SET_USER_DATA";
export const SHOW_AUDIT_LOG = "SHOW_AUDIT_LOG";
export const LOGOUT_USER = "LOGOUT_USER";

export const setUserToken = (tokens: object) => {
  return {
    type: SET_USER_TOKEN,
    tokens: tokens,
  };
};

export const setUserData = (data: object) => {
  return {
    type: SET_USER_DATA,
    data: data,
  };
};

export const showAuditLog = (data: any) => {
  return {
    type: SHOW_AUDIT_LOG,
    data: data,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT_USER
  }
}