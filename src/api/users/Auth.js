import instance from "../index";
import { storeToken } from "../storage";
const signup = async (userData) => {
  try {
    const { data } = await instance.post("/users/signup", userData);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.error("Error signing up:", error.response?.data || error.message);
    throw error;
  }
};

const signin = async (credentials) => {
  try {
    const { data } = await instance.post("/users/signin", credentials);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.error("Error signing in:", error.response?.data || error.message);
    throw error;
  }
};

export { signup, signin };
