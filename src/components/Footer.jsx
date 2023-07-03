import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a href="#skills" className="link link-hover">Skills</a> 
          <a href="#projects" className="link link-hover">Projects</a> 
          <a href="#aboutMe" className="link link-hover">About Me</a> 
          <a href="#contact" className="link link-hover">Contact Me</a>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4 text-3xl ">
           <a href="https://github.com/kamrul25" target="_blank"> <FaGithub></FaGithub></a>
           <a href="https://www.linkedin.com/in/kamrul-hasan-jaman-10168b278/" target="_blank"> <FaLinkedin></FaLinkedin></a>
          </div>
        </div> 
        <div>
          <p>Copyright © 2023 - All right reserved by Kamrul Hasan Jaman</p>
        </div>
      </footer>
    );
};

export default Footer;