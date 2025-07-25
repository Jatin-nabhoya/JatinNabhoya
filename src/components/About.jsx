import React from 'react';
import PropTypes from 'prop-types';

const SkillCategory = ({ title, skills }) => (
  <div className="border border-[#ABB2BF] p-4 hover:border-[#C778DD] transition-colors">
    <h3 className="text-lg font-bold mb-2 text-[#C778DD]">{title}</h3>
    <div className="text-[#ABB2BF]">
      {skills.join(', ')}
    </div>
  </div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Education = ({ degree, university, duration, description }) => (
  <div className="relative pl-6 pb-8 last:pb-0">
    <div className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></div>
    <div className="border-l-2 border-[#ABB2BF] pl-8 ml-[2px] pb-2">
      <div className="border border-[#ABB2BF] p-4 hover:border-[#C778DD] transition-colors">
        <h3 className="text-lg font-bold text-white">{degree}</h3>
        <p className="text-[#C778DD]">{university}</p>
        <p className="text-[#ABB2BF] text-sm mb-2">{duration}</p>
        <p className="text-[#ABB2BF]">{description}</p>
      </div>
    </div>
  </div>
);

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const About = () => {
  const education = [
    {
      degree: "Master of Science in Data Science | GPA : 4.00",
      university: "University of New Haven",
      duration: "Jan 2025 - Present",
      description: "Mathematics for Data Science, Machine Learning, Deep Learning, Statistical Inference & Predictive Analytics"
    },
    {
      degree: "Bachelor of Technology in Computer Engineering | GPA : 3.3",
      university: "R.K University, Gujarat, India",
      duration: "Aug 2020 - Mar 2024",
      description: "Applied Mathematics, Discrete Mathematics, Algorithms, Database Systems, Machine Learning, Natural Language Processing, Cloud Computing, Distributed Computing"
    }
  ];

  const technicalSkills = {
    "🧠 Mathematics & Core Concepts": [
      "Gradient Descent",
      "Backpropagation",
      "Linear Algebra",
      "Probability",
      "Statistics",
      "Optimization Techniques",
      "Calculus"
    ],
    "🧑‍💻 Programming Languages & Databases": [
      "Languages: Python",
      "R",
      "SQL",
      "Relational DBs: PostgreSQL",
      "MySQL",
      "NoSQL DBs: MongoDB"
    ],
    "🤖 Machine Learning & AI": [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "PySpark",
      "Pandas",
      "NumPy",
      "SciPy",
      "Model Deployment",
      "MLOps Basics"
    ],
    "📊 Data Visualization & Analytics": [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Dash",
      "Plotly"
    ],
    "🌐 Web, API & App Development": [
      "Django",
      "Flask",
      "React.js",
      "RESTful APIs",
      "Postman",
      "JWT",
      "HTML/CSS/JS Basics",
      "Figma"
    ],
    "☁️ DevOps, Cloud & Deployment": [
      "AWS (S3, Lambda, Translator)",
      "Azure (Blob Storage, Synapse, Data Lake)",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD (Basics)"
    ],
    "🧱 Big Data Technologies": [
      "Apache Spark (PySpark)",
      "Hadoop (HDFS, MapReduce basics)",
      "Hive",
      "Kafka (Basics)",
      "Azure Synapse",
      "Databricks"
    ]
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>about-me
        </h2>

        {/* Professional Summary */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
          <div className="text-[#ABB2BF] space-y-4">
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I’m Jatin Nabhoya — a Data Science professional and Machine Learning enthusiast driven by a passion for turning raw data into real‑world impact.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              My journey began in India, where I earned a B.Tech in Computer Engineering from RK University and sharpened my Python chops through NPTEL’s “Python for Data Science.” Alongside, <strong className="text-[#C778DD]">I led my team to become a Smart India Hackathon finalist</strong>, wrangling messy datasets into predictive models that solved concrete problems. Today, as an M.S. student in Data Science at the University of New Haven, I delve deeper into feature engineering, time‑series forecasting, and scalable model deployment.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I’ve architected end‑to‑end solutions— from an electric‐vehicle population dashboard that forecasts regional EV adoption trends, to a full‑stack e‑commerce portal built with Django REST and ReactJS. I’m equally comfortable crafting SQL/NoSQL pipelines and designing interactive visualizations as I am fine‑tuning classifiers with scikit‑learn or experimenting with neural nets in TensorFlow. My work always centers on one belief: <strong className="text-[#C778DD]">Data only becomes powerful when it drives actionable insights.</strong>
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              Whether I’m optimizing a recommendation engine, automating ETL processes in the cloud, or mentoring peers on best practices, I blend statistical rigor, software engineering, and a user‑first mindset. Let’s collaborate to build intelligent, data‑driven applications that not only learn—but lead—businesses and communities forward.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="relative">
            {education.map((edu, index) => (
              <Education key={index} {...edu} />
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <SkillCategory key={category} title={category} skills={skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 