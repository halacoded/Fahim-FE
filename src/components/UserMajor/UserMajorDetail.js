import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getMe, addCourses, removeCourses } from "../../api/users/User";
import { getMajorById } from "../../api/major/Major";
import "./userMajorDetail.css";

const UserMajorDetail = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch user data
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  // Fetch major details based on user's major ID
  const majorId = user?.major?._id;
  const {
    data: major,
    isLoading: majorLoading,
    error: majorError,
  } = useQuery({
    queryKey: ["major", majorId],
    queryFn: () => getMajorById(majorId),
    enabled: !!majorId,
  });

  // Mutation to add courses
  const addCoursesMutation = useMutation({
    mutationKey: ["addCourses"],
    mutationFn: () => addCourses(selectedCourses),
    onSuccess: (data) => {
      setMessage("Courses added successfully!");
      setSelectedCourses([]);
    },
    onError: (error) => {
      setMessage("Failed to add courses.");
    },
  });

  // Mutation to remove courses
  const removeCoursesMutation = useMutation({
    mutationKey: ["removeCourses"],
    mutationFn: () => removeCourses(selectedCourses),
    onSuccess: (data) => {
      setMessage("Courses removed successfully!");
      setSelectedCourses([]);
    },
    onError: (error) => {
      setMessage("Failed to remove courses.");
    },
  });

  const handleCourseSelection = (courseId) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleAddCourses = () => {
    addCoursesMutation.mutate();
  };

  const handleRemoveCourses = () => {
    removeCoursesMutation.mutate();
  };

  if (userLoading || majorLoading) return <div>Loading...</div>;
  if (userError || majorError) return <div>Error fetching details.</div>;

  return (
    <div className="major-detail">
      <h2>{major.name}</h2>
      <p>Credits: {major.credits}</p>
      <p>Year: {major.year}</p>
      <h3>Courses</h3>
      <ul className="courses-list">
        {major.courses.map((course) => (
          <li key={course._id}>
            <input
              type="checkbox"
              value={course._id}
              onChange={() => handleCourseSelection(course._id)}
              checked={selectedCourses.includes(course._id)}
            />
            {course.name}
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddCourses}
        disabled={addCoursesMutation.isLoading}
      >
        {addCoursesMutation.isLoading ? "Adding Courses..." : "Add Courses"}
      </button>
      <button
        onClick={handleRemoveCourses}
        disabled={removeCoursesMutation.isLoading}
      >
        {removeCoursesMutation.isLoading
          ? "Removing Courses..."
          : "Remove Courses"}
      </button>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default UserMajorDetail;
