import instance from "./configAxios";

export const getAllProduct = async () => {
  return await instance.get(`product`).then((state) => {
    return state.data;
  });
};
export const getProductById = async (productId) => {
  return await instance.get(`product/${productId}`).then((state) => {
    return state.data;
  });
};
export const postProduct = async (product) => {
  console.log(product);
  return await instance.post(`product`, product).then((state) => {
    return state.data;
  });
};
