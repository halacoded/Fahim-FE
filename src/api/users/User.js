import instance from "../index";

const getMe = async () => {
  try {
    const { data } = await instance.get("/users/me");
    return data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const addCourses = async (courseIds) => {
  try {
    const { data } = await instance.post("/users/addcourses", { courseIds });
    return data;
  } catch (error) {
    console.error(
      "Error adding courses:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const removeCourses = async (courseIds) => {
  try {
    const { data } = await instance.post("/users/removecourses", { courseIds });
    return data;
  } catch (error) {
    console.error(
      "Error removing courses:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export { getMe, addCourses, removeCourses };
