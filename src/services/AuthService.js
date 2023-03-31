import instance from "./configAxios";

export const postAuthLogin = async (user) => {
  return await instance.post(`auth/login`, user).then((state) => {
    return state.data;
  });
};
export const getUserAuthentification = async () => {
  return await instance.get(`auth/me`).then((state) => {
    return state.data;
  });
};
export const deleteUserAuthentification = async () => {
  return await instance.get(`auth/logout`).then((state) => {
    return state.data;
  });
};
