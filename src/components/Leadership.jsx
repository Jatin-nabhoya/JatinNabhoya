import React from 'react';
import PropTypes from 'prop-types';

const LeadershipCard = ({ role, organization, year }) => (
  <div className="border border-[#ABB2BF] group hover:border-[#C778DD] transition-colors h-full flex flex-col">
    <div className="p-4 flex-grow">
      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{role}</h3>
      <p className="text-[#C778DD] text-sm mb-2">{organization}</p>
      <p className="text-[#ABB2BF] text-xs">{year}</p>
    </div>
  </div>
);

LeadershipCard.propTypes = {
  role: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

const Leadership = () => {
  const activities = [
    {
      role: "Member",
      organization: "Student Organizations Advisory Council (SOAC), RK University",
      year: "2023-2024",
    },
    {
      role: "Member & Volunteer",
      organization: "Math Club",
      year: "2022-2024",
    },
    {
      role: "SIH 2022 Finalist",
      organization: "Smart India Hackathon (Govt)",
      year: "2022",
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>leadership-extracurricular
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <LeadershipCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership; 