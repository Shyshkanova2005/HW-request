import React from 'react';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>User ID: {post.userId}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
