import React from "react";

const Team = ({ teamMembers }) => {
  return (
    <div className="my-12 text-center  md:w-[70%] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Meet Our Team
      </h2>
      <div className="mt-8 flex gap-5 flex-wrap justify-center items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center w-[400px] h-[200px] flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-yellow-500">{member.role}</p>
            <p className="mt-2 text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
