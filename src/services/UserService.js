import instance from "./configAxios";

export const postRegisterUser = async (user) => {
  return await instance.post(`user`, user).then((state) => {
    return state.data;
  });
};
