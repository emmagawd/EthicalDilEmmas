import React from "react";

const ForumThread = () => {
  // Sample data for the forum thread, you might want to fetch this data from a backend or state management
  const posts = [
    {
      id: 1,
      author: "EmmaStotle_xD",
      content: "What if we really are living in a simulation?",
      timestamp: "2023-03-07 10:00",
    },
    {
      id: 2,
      author: "PhilosoEmma42",
      content: "It def raises questions about free will and predestination..",
      timestamp: "2023-03-07 10:05",
    },
    // Add more posts as needed
  ];

  return (
    <div class="threadtable">
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Post</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.author}</td>
              <td>{post.content}</td>
              <td>{post.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForumThread;
