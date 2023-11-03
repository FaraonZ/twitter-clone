import image1 from "./image1.jpg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpg";
import image4 from "./image4.png";

import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";

const data = [
  {
    id: 1,
    avatar: user1,
    username: "user1",
    displayName: "User One",
    timestamp: "2 hours ago",
    content: "This is a sample tweet!",
    media: [image1, image2],
    links: ["https://www.apple.com/macbook-pro/"],
    likes: 10,
    retweets: 5,
  },
  {
    id: 2,
    avatar: user2,
    username: "user2",
    displayName: "User Two",
    timestamp: "3 hours ago",
    content: "Just tweeting away!",
    media: [image3],
    likes: 7,
    retweets: 3,
  },
  {
    id: 3,
    avatar: user3,
    username: "user3",
    displayName: "User Three",
    timestamp: "1 hours ago",
    content: "Just tweeting away!",
    media: [image4],
    likes: 12,
    retweets: 4,
  }
];

export default data;
