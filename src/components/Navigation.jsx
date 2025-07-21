import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#282C33] z-50">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white hover:text-[#C778DD] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col px-6 py-8 space-y-6">
        <a href="#home" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>home
        </a>
        <a href="#about" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>about
        </a>
        <a href="#experience" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>experience
        </a>
        <a href="#projects" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>projects
        </a>
        <a href="#blog" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>blog
        </a>
        <a href="#certificates" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>certificates
        </a>
        <a href="#leadership" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>leadership
        </a>
        <a href="#contact" className="nav-link text-xl" onClick={onClose}>
          <span className="hash-tag">#</span>contact
        </a>
        <button className="nav-link text-xl">EN</button>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Navigation; 