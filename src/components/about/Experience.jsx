import React from "react";

const experienceContent = [
  {
    year: "May, 2025 - Present",
    position: "Frontend Web Developer",
    compnayName: "IT Genics",
    details: `Working as a Frontend Web Developer, building responsive and user-friendly web 
      applications using React, Next.js, and Tailwind CSS. Collaborating with backend 
      developers and UI/UX teams to deliver high-quality products. Focused on performance 
      optimization, clean code practices, and modern frontend architecture.`,
  },
  {
    year: "Nov, 2024 - Feb, 2025",
    position: "React & Next JS Developer (Intern)",
    compnayName: "Web Craft Limited Solutions",
    details: `Completed an internship as a React and Next.js Developer where I developed 
      dynamic components, integrated APIs, and implemented state management using Redux. 
      Gained hands-on experience in SSR/SSG, responsive UI design, and modern web 
      development workflows.`,
  },
  {
    year: "Sep, 2024 - Nov, 2024",
    position: "MERN Stack Developer",
    compnayName: "Developers Hub Corporation",
    details: `Worked on MERN stack projects involving MongoDB, Express.js, React, and Node.js. 
      Implemented RESTful APIs, built interactive frontends, and optimized database queries. 
      Learned best practices in version control, teamwork, and full-stack development.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font fw-[200]">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
