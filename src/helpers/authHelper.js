export const getLocalStorage = (key) => {
  if (window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const isAuth = () => {
  if (window !== "undefined") {
    if (getLocalStorage("beekin_user_cred")) {
      return getLocalStorage("beekin_user_cred");
    } else {
      return false;
    }
  }
};
