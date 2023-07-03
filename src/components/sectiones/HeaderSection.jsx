import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "ResumeOfKamrulHasanJaman.pdf";
    anchor.download = "ResumeOfKamrulHasanJaman.pdf";
    anchor.click();
  };
  return (
    <div className="mx-4 lg:mx-0 lg:flex justify-between items-center gap-8 mt-10 space-y-4 lg:space-y-0">
      <div className="space-y-2" >
        <p className="text-2xl">Hi! I am</p>
        <p className="text-4xl font-semibold" >Kamrul Hasan Jaman</p>
        <p className="text-xl text-[#00ADB5]">Working as a</p>
        <p className="text-[#00ADB5]">
        <TypeAnimation
          sequence={[
            "Front-end Web  Developer",
            1000, // Waits 1s
            "React JS Developer", 
            2000, // Waits 2s
            "MERN Stack Developer",
            1000, 
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block", }}
        ></TypeAnimation>
        </p>
        <button className="btn btn-accent" onClick={handleDownload}>
          Download Resume <FaDownload></FaDownload>
        </button>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <img
          src="portfolioImage.jpg"
          alt="my photo"
          className="border rounded-full w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
