import React from 'react';
import BlogHero from '../../components/Blog/BlogHero';
import BlogGrid from '../../components/Blog/BlogGrid';

const Blog = () => {
  return (
    <div className=" text-white overflow-hidden max-w-6xl mx-auto">
      <BlogHero></BlogHero>
      <BlogGrid></BlogGrid>
    </div>
  );
};

export default Blog;