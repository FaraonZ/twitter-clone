import React, { useState } from "react";
import "./Post.css";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.avatar} alt="User Avatar" />
        <div className="user-info">
          <a href={`/${post.username}`} className="username">
            {post.displayName}
          </a>
          <span className="timestamp">{post.timestamp}</span>
        </div>
      </div>
      <p>{post.content}</p>

      <div className="media">
        {post.media.map((media, index) => (
          <img key={index} src={media} alt={`Media ${index}`} />
        ))}
      </div>

      <div className="links">
        {post.links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            Link {index + 1}
          </a>
        ))}
      </div>

      <div className="actions">
        <button onClick={handleLike} className={isLiked ? "liked" : ""}>
          {isLiked ? "Unlike" : "Like"} ({post.likes})
        </button>
        <button onClick={handleDislike} className={isDisliked ? "disliked" : ""}>
          {isDisliked ? "Undislike" : "Dislike"} ({post.dislikes})
        </button>
      </div>
    </div>
  );
};

export default Post;
