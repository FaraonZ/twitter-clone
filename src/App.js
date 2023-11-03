import React from "react";
import Feed from './components/Feed';
import Post from "./components/Post";
import Profile from "./components/Profile";
import AppRouter from "./AppRouter";

const App = () => {
  // Define mock data
  const posts = [
    { id: 1, content: "This is a post." },
    { id: 2, content: "Another post here." },
  ];

  const user = {
    username: "JohnDoe",
    bio: "I'm just a Twitter-like user.",
  };

  return (
    <div className="app">
      <h1>Your Twitter Clone</h1>
      <AppRouter />
    </div>
  );
};

export default App;