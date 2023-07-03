import chef1 from "../../assets/chefWebsite/chef1.png";
import chef2 from "../../assets/chefWebsite/chef2.png";
import chef3 from "../../assets/chefWebsite/chef3.png";
import car1 from "../../assets/carToys/carToy1.png"
import car2 from "../../assets/carToys/carToy2.png"
import car3 from "../../assets/carToys/carToy3.png"
import car4 from "../../assets/carToys/carToy4.png"
import car5 from "../../assets/carToys/carToy5.png"
import car6 from "../../assets/carToys/carToy6.png"
import sp1 from "../../assets/sports/sp1.png"
import sp2 from "../../assets/sports/sp2.png"
import sp3 from "../../assets/sports/sp3.png"
import sp4 from "../../assets/sports/sp4.png"
import sp5 from "../../assets/sports/sp5.png"
import sp6 from "../../assets/sports/sp6.png"
import sp7 from "../../assets/sports/sp7.png"
import sp8 from "../../assets/sports/sp8.png"
import sp9 from "../../assets/sports/sp9.png"
import sp10 from "../../assets/sports/sp10.png"
import sp11 from "../../assets/sports/sp11.png"
import sp12 from "../../assets/sports/sp12.png"


const Projects = () => {
  const chefImages = [`${chef1}`, `${chef2}`, `${chef3}`];
const carToysImages = [`${car1}`,`${car2}`,`${car3}`,`${car4}`,`${car5}`,`${car6}`,];
const sportsImages = [`${sp1}`, `${sp2}`,`${sp3}`,`${sp4}`,`${sp5}`,`${sp6}`,`${sp7}`,`${sp8}`,`${sp9}`,`${sp10}`,`${sp11}`,`${sp12}`,];
  return (
    <div id="projects">
      <h1 className="uppercase font-bold text-4xl ml-3 lg:ml-0">My Projects</h1>
      <div className="border border-b-2 border-sky-500 w-[230px] ml-3 lg:ml-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 mx-4 lg:mx-0">
        <div className="card  bg-base-100 shadow-xl border border-white" data-aos="fade-down-right" data-aos-duration="1000">
          <h2 className=" text-center mt-2 text-2xl">Chef Recipes</h2>
          <div className="flex justify-between items-center gap-2 mx-2">
            <a href="https://chef-recie-hunting.web.app/" className="text-sky-500">Live Demo</a>
            <a href="https://github.com/kamrul25/chef-recipe-hunter-client-side" className="text-sky-500">
              Front Side Code
            </a>
            <a href="https://github.com/kamrul25/chef-recipe-hunter-server" className="text-sky-500">
              Server Side Code
            </a>
          </div>
          <figure>
            <div
              className="overflow-hidden h-96 mt-4 hover:overflow-y-auto "
              
            >
              {chefImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-full my-3"
                />
              ))}
            </div>
          </figure>
        </div>
        <div className="card  bg-base-100 shadow-xl border border-white" data-aos="fade-up" data-aos-duration="1000">
          <h2 className=" text-center mt-2 text-2xl">Car Toys</h2>
          <div className="flex justify-between items-center gap-2 mx-2">
            <a href="https://toy-marketplace-ef2f8.web.app/" className="text-sky-500">Live Demo</a>
            <a href="https://github.com/kamrul25/toy-marketplace-client" className="text-sky-500">
              Front Side Code
            </a>
            <a href="https://github.com/kamrul25/toy-marketplace-server" className="text-sky-500">
              Server Side Code
            </a>
          </div>
          <figure>
          <div
              className="overflow-hidden h-96 mt-4 hover:overflow-y-auto "
              
            >
              {carToysImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-full my-3"
                />
              ))}
            </div>
          </figure>
        </div>
        <div className="card  bg-base-100 shadow-xl border border-white" data-aos="fade-down-left" data-aos-duration="1000">
          <h2 className=" text-center mt-2 text-2xl">Sports Academic</h2>
          <div className="flex justify-between items-center gap-2 mx-2">
            <a href="https://sports-61576.web.app/" className="text-sky-500">Live Demo</a>
            <a href="https://github.com/kamrul25/sports-client" className="text-sky-500">
              Front Side Code
            </a>
            <a href="https://github.com/kamrul25/sports-server-new" className="text-sky-500">
              Server Side Code
            </a>
          </div>
          <figure>
          <div
              className="overflow-hidden h-96 mt-4 hover:overflow-y-auto "
              
            >
              {sportsImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-full my-3"
                />
              ))}
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Projects;
