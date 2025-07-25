import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, tech, duration, image, sourceCode, liveDemo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className="bg-[#282C33] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(199,120,221,0.4)]">
        {/* Thumbnail Image */}
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-[#C778DD]">{duration}</span>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span key={index} className="text-sm text-[#C778DD]">#{item}</span>
            ))}
          </div>

          {/* Description with Bullet Points */}
          <div className="text-[#ABB2BF] space-y-2 mb-6">
            {(isExpanded ? description : description.slice(0, 2)).map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#C778DD] mt-1.5">•</span>
                <p>{point}</p>
              </div>
            ))}
            {description.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#C778DD] hover:underline mt-2 block"
              >
                {isExpanded ? 'Show less' : `Show ${description.length - 2} more points`}
              </button>
            )}
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
              >
                Live Demo <span className="ml-1">{'<~>'}</span>
              </a>
            )}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
              >
                Source Code <span className="ml-1">{'</>'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sourceCode: PropTypes.string,
  liveDemo: PropTypes.string
};

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Data Pipeline on Azure",
      duration: "Apr-2025",
      tech: [
        "Azure Data Lake Storage Gen2",
        "Azure Databricks (PySpark)",
        "Delta Lake",
        "Azure SQL Database",
        "Azure Data Factory"
      ],
      description: [
        "Designed an end-to-end data pipeline on Azure for healthcare Revenue Cycle Management (RCM), streamlining data ingestion, processing, and insights generation across multiple cloud services",
        "Processed and refined patient, provider, and transactional data using Data Factory, Databricks, and Delta Lake, with integrated Azure Synapse for analytics and Power BI for visualization",
        "Implemented medallion architecture (bronze, silver, gold layers) to ensure layered data governance, scalable processing, and real-time monitoring via Azure Monitor and custom logging solutions"
      ],
      image: "/images/healthcare-pipeline.png",
      sourceCode: "#",
      liveDemo: "#"
    },
    {
      title: "Netflix Content Breakdown: Genres, Volumes, & Annual Releases",
      duration: "mar-2023",
      tech: [
        "PowerBI",
        "Numpy",
        "Pandas",
        "scikit-learn"
      ],
      description: [
        "Built a predictive model to analyze trends in Netflix content distribution.",
        "Developed interactive dashboards in Power BI, helping users visualize genre popularity and content volume.",
        "Applied Machine Learning techniques to forecast future content trends based on past data."
      ],
      image: "/images/netflix.png",
      sourceCode: "https://github.com/Jatin-nabhoya/Netflix-Movie-TV-Show-data-Visualaztion",
      liveDemo: "#"
    },
    {
      title: "Scholarship Verification Automation (SIH 2022 Finalist)",
      duration: "apr-2022",
      tech: [
        "Python",
        "TensorFlow",
        "SQL",
        "Scikit-learn",
        "AWS (S3, Lambda, Translator)",
        "Django",
        "React.js"
      ],
      description: [
        "Built an ML-powered document verification system using OCR and NLP, improving fraud detection accuracy by 30%.",
        "Implemented deep learning models (CNN + RNN) to detect fraudulent documents, improving verification accuracy by 30%.",
        "Integrated AWS S3 for secure document storage and AWS Translator for multilingual support, ensuring accessibility for diverse applicants.",
        "Designed an interactive dashboard in React.js for real-time tracking of application status and document validation results.",
        "Used statistical analysis to identify patterns in fraudulent applications, helping policymakers enhance verification strategies."
      ],
      image: "/images/sih.png",
      sourceCode: "https://github.com/Jatin-nabhoya/VerifyScholar",
      liveDemo: "https://scholarship-verification-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 