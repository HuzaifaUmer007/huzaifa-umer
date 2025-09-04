import React from "react";

const educationContent = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Computer Science",
    institute: "University of South Asia",
    details: `Currently pursuing a Bachelor's degree in Computer Science with a focus on 
      software engineering, web development, and emerging technologies. Gaining strong 
      knowledge of algorithms, databases, operating systems, and full-stack development.`,
  },
  {
    year: "2019 - 2021",
    degree: "Intermediate",
    institute: "Reader Group of Colleges",
    details: `Completed FSc (Pre-Engineering) with a solid foundation in Mathematics, 
      Physics, and Computer Science. Developed problem-solving skills and an analytical 
      mindset that prepared me for computer science studies at the university level.`,
  },
  {
    year: "2017 - 2019",
    degree: "Matriculation",
    institute: "Govt. Higher Secondary School",
    details: `Achieved strong academic results in Science subjects including Mathematics, 
      Physics, and Computer Science. Built the foundation of logical reasoning, discipline, 
      and curiosity for technology that led to choosing Computer Science as a career path.`,
  },
];


const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font fw-[200]">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
