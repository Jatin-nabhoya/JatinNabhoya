import React from 'react';
import PropTypes from 'prop-types';

const BlogCard = ({ title, date, description, tags, image, readTime, link }) => (
  <div className="relative group">
    <div className="bg-[#282C33] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(199,120,221,0.4)]">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm text-[#C778DD]">#{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#ABB2BF] mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-[#ABB2BF] text-sm">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
            >
            Read on Medium →
          </a>
        </div>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

const Blog = () => {
  const posts = [
    {
      title: "Cosine Similarity: The Secret Sauce of Recommendation Systems",
      date: "Mar 15, 2024",
      description: "Dive deep into the mathematics and implementation of Cosine Similarity, a fundamental concept in recommendation systems and information retrieval. Learn how this powerful metric helps in finding similar items and making accurate recommendations.",
      tags: ["Machine Learning", "Data Science", "Python", "Recommendation Systems"],
      image: "/images/cosine-similarity.svg",
      readTime: 7,
      link: "https://medium.com/@jvnabhoya/cosine-similarity-the-secret-sauce-of-recommendation-systems-a1b5a11c236f"
    },
    // You can add more blog posts here
  ];

  return (
    <section id="blog" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>blog
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 