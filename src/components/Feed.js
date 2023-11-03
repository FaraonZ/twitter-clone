import React from "react";
import Post from "./Post";

const Feed = ({ data }) => {
  return (
    <div className="feed">
      {data.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Feed;

