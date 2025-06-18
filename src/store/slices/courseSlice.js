 // features/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseDetails: {},
  courseContent: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseDetails: (state, action) => {
      state.courseDetails = action.payload;
    },
    setCourseContent: (state, action) => {
      state.courseContent = action.payload;
    },
    resetCourse: (state) => {
      state.courseDetails = {};
      state.courseContent = [];
    },
  },
});

export const { setCourseDetails, setCourseContent, resetCourse } = courseSlice.actions;
export default courseSlice.reducer;
