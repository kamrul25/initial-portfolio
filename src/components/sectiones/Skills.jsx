const Skills = () => {
  return (
    <div id="skills">
      <h1 className="uppercase font-bold text-4xl ml-3 lg:ml-0">My Skills</h1>
      <div className="border border-b-2 border-sky-500 w-[175px] ml-3 lg:ml-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 mx-4 lg:mx-0">
        <div className="card bg-base-100 shadow-xl border border-white" data-aos="fade-up-right" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title">Expertise!</h2>
            <p>HTM5</p>
            <p>CSS3</p>
            <p>Tailwind</p>
            <p>DaisyUi</p>
            <p>React JS</p>
            <p>React Router</p>
          </div>
        </div>
    
        <div className="card bg-base-100 shadow-xl border border-white" data-aos="flip-left" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title">Comfortable!</h2>
            <p>JavaScript</p>
            <p>Express JS </p>
            <p>MongoDB </p>
            <p>REST APIs </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-white" data-aos="flip-right" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title">Familiar!</h2>
            <p>Node JS</p>
            <p>Firebase</p>
            <p>JWT</p>
            <p> TanStack Query </p>
            <p> Axios</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-white" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title">Tools!</h2>
            <p>VS Code</p>
            <p>GitHub</p>
            <p>Figma</p>
            <p>Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
