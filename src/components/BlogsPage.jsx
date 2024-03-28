// BlogsPage.js

import React from 'react';
import Blog from './Blog';

const BlogsPage = () => {
  // Example data for blogs
  const blogs = [
    {
      id: 1,
      title: 'My First Blog Post',
      date: 'March 1, 2024',
      author: 'Your Name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      date: 'March 15, 2024',
      author: 'Your Name',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    // Add more blog posts here
  ];

  return (
    <div className="blogs-page">
      <h1>Blogs</h1>
      <div className="blogs-list">  
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
