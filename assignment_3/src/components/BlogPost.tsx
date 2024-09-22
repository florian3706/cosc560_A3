import React from "react";
import blogPostStyle from "../styles/BlogPost.module.css";

export default function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>
      <title className={blogPostStyle.title}>INSERT TITLE HERE</title>
      <p className={blogPostStyle.content}>INSERT CONTENT HERE</p>
    </div>
  );
}