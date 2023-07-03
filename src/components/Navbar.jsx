import Home from "./sectiones/Home";
import { FaBars, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/public/resumeOfKamrulHasanJaman.pdf";
    anchor.download = "resumeOfKamrulHasanJaman.pdf";
    anchor.click();
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <FaBars className="text-2xl"></FaBars>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 title text-2xl">
            Kamrul Hasan Jaman
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal  text-2xl">
              {/* Navbar menu content here */}
              <li>
                <a href="#" className="hover:bg-base-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:bg-base-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:bg-base-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#aboutMe" className="hover:bg-base-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:bg-base-300">
                  Contact Me
                </a>
              </li>
            </ul>
            <button className="btn btn-accent" onClick={handleDownload}>
                  Download Resume <FaDownload></FaDownload>
                </button>
          </div>
        </div>
        {/* Page content here */}
        <Home></Home>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="space-y-4 p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a href="#" className="hover:bg-base-200 ">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:bg-base-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:bg-base-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#aboutMe" className="hover:bg-base-200">
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-base-200">
              Contact Me
            </a>
          </li>
          <li>
            <button className="btn btn-accent" onClick={handleDownload}>
              Download Resume <FaDownload></FaDownload>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
