import instance from "./configAxios";

export const getAllCategory = async () => {
  return await instance.get(`category`).then((state) => {
    return state.data;
  });
};
