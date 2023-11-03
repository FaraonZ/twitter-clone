// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Profile from "./components/Profile";
import data from "./data"

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={ <Feed posts={data} /> }
          />
          <Route
            path="/post"
            element={<Post />}
          />
          <Route
            path="/profile"
            // element={<Profile userProfile={userProfile} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import `Routes`

// import Feed from "./components/Feed";
// import Profile from "./components/Profile";
// import data from "./data";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes> {/* Wrap your routes in a `Routes` component */}
//         <Route path="/" element={<Feed data={data} />} />
//         <Route path="/feed" element={<Feed data={data} />} />
//         {/* Define other routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;




