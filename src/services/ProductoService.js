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
export const postProduct = async (formData) => {
  return await instance.post(`product`, formData).then((state) => {
    return state.data;
  });
};

export const updateProduct = async (formData) => {
  return await instance.put(`product`, formData).then((state) => {
    return state.data;
  });
};
