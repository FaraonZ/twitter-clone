import { render, screen } from '@testing-library/react';
import App from './App';
import { posts, user } from "./data";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function App() {
  return (
    <div className="app">
      <Feed posts={posts} />
      {/* <Post post={posts[0]} /> */}
      {/* <Profile user={user} /> */}
    </div>
  );
}