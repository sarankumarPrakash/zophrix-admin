import api from "./api";
import { setToken, removeToken } from "./token.service";

export const login = async (payload) => {
  console.log(payload,'-----------');
  
  const { data } = await api.post("/auth/login", payload);
  console.log(data,'----------')
  setToken(data.accessToken);
  return data;
};

export const register = async (payload) => {
  console.log(payload,'-------------------')
  const { data } = await api.post("/auth/register", payload);
  return data;
};

export const logoutUser = () => {
  removeToken();
};
