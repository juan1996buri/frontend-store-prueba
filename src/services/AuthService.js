import axios from "axios";

const url = "http://[::1]:3000/api/v1/auth/";

export const postAuthLogin = async (user) => {
  return await axios.post(`${url}login`, user).then((state) => {
    return state.data;
  });
};
