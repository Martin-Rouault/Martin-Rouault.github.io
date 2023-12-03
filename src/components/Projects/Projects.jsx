import webstellar from "../../assets/webstellar.png";
import weather from "../../assets/weather.png";

const Projects = () => {
  return (
    <>
      <div className="mb-16 lg:mb-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-8 lg:mt-16 mb-4 font-bold">
            My Projects
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly mt-8 lg:mt-16 md:mb-24">
          <div className="card lg:w-2/5 glass">
            <figure>
              <img
                src={webstellar}
                alt="webstellar website"
                className="max-w-full min-h-48 object-cover"
              />
            </figure>
            <div className="card-body mt-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                WebStellar
              </h2>
              <p className="text-sm md:text-md lg:text-lg mb-4">
                A beautiful site
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://webstellar.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn text-sm md:text-md lg:text-lg">Learn now!</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:w-2/5 glass">
            <figure>
              <img src={weather} alt="weather app" className="max-w-full min-h-48 object-cover"/>
            </figure>
            <div className="card-body mt-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                O-Weather
              </h2>
              <p className="text-sm md:text-md lg:text-lg mb-4">
                How to park your car at your garage?
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://webstellar.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn text-sm md:text-md lg:text-lg">Learn now!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
