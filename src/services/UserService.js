import axios from "axios";

const url = "http://[::1]:3000/api/v1/user/";

export const postRegisterUser = async (user) => {
  return await axios.post(`${url}`, user).then((state) => {
    return state.data;
  });
};
