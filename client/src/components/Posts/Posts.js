import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return (
    <div>
      <h1>Posts</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
