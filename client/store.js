import { configureStore } from "@reduxjs/toolkit";
import forumReducer from "./reducers/forumReducer";
// import reducer here

export default configureStore({
  reducer: {
    // set reducer here
    // counter: counterReducer,
    forum: forumReducer,
  },
});
