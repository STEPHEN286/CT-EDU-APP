import React from 'react';

const ImpactSection = () => {
  const stats = [
    {
      number: "2000+",
      label: "Module Available"
    },
    {
      number: "8000+",
      label: "Active Students"
    },
    {
      number: "97%",
      label: "Satisfaction Rate"
    },
    {
      number: "300+",
      label: "Expert Instructors"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">Join our thriving community</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center relative"
            >
              {/* Vertical divider line (hidden on mobile, shown on larger screens) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300"></div>
              )}
              
              <div className="text-5xl font-bold text-red-500 mb-3">
                {stat.number}
              </div>
              
              <div className="text-gray-700 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;