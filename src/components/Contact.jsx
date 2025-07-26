import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
  >
    {icon}
    <span>{label}</span>
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-[#ABB2BF] mb-8">
            I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Jatin Nabhoya</h3>
              <p className="text-[#ABB2BF]">+1 (203)-507-5295</p>
              <p className="text-[#ABB2BF]">jvnabhoya.work@gmail.com</p>
              <p className="text-[#ABB2BF] mb-6">New haven, CT, US</p>

              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <div className="space-y-4">
                <SocialLink 
                  href="mailto:jvnabhoya.work@gmail.com"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  }
                  label="jvnabhoya.work@gmail.com"
                />
                <SocialLink 
                  href="https://github.com/Jatin-Nabhoya"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  }
                  label="github.com/Jatin-Nabhoya"
                />
                <SocialLink 
                  href="https://linkedin.com/in/jatin-nabhoya"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                  label="linkedin.com/in/jatin-nabhoya"
                />
                <SocialLink
  href="https://medium.com/@jvnabhoya"
  icon={
    <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="100" fill="currentColor" />
      <text x="95" y="360" fontFamily="Georgia, serif" fontSize="300" fill="black">Me</text>
    </svg>
  }
  label="medium.com/@jvnabhoya"
/>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-[#ABB2BF] p-6">
            <form className="space-y-6" action="https://formspree.io/f/mwpqoqyg" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-[#282C33] border border-[#ABB2BF] p-2 focus:border-[#C778DD] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-[#282C33] border border-[#ABB2BF] p-2 focus:border-[#C778DD] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-[#282C33] border border-[#ABB2BF] p-2 focus:border-[#C778DD] outline-none transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-[#C778DD] px-6 py-2 hover:bg-[#C778DD] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
