import axios from "axios";

const url = "http://[::1]:3000/api/v1/";

export const getAllProduct = async () => {
  return await axios.get(`${url}product`).then((state) => {
    return state.data;
  });
};
export const getProductById = async (productId) => {
  return await axios.get(`${url}product/${productId}`).then((state) => {
    return state.data;
  });
};
