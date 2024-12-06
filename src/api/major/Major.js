import instance from "../index";

const getMajors = async () => {
  try {
    const { data } = await instance.get("/majors");
    return data;
  } catch (error) {
    console.error(
      "Error fetching majors:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const getMajorById = async (id) => {
  try {
    const { data } = await instance.get(`/majors/${id}`);
    return data;
  } catch (error) {
    console.error(
      `Error fetching major with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

const getMajorCourses = async () => {
  try {
    const { data } = await instance.get("/majors/a/aaa");
    return data;
  } catch (error) {
    console.error(
      "Error fetching major courses:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export { getMajors, getMajorById, getMajorCourses };
