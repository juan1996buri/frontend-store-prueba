import axios from "axios";

const url = "http://[::1]:3000/api/v1/";

export const getAllCategory = async () => {
  return await axios.get(`${url}category`).then((state) => {
    return state.data;
  });
};
