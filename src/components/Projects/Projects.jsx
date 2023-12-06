import webstellar from "../../assets/webstellar.png";
import weather from "../../assets/weather.png";
import weatherMobile from "../../assets/weatherMobile.webp";
import webstellarMobile from "../../assets/webstellarMobile.webp";

const Projects = () => {
  return (
    <>
      <div className="mb-16 lg:mb-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            My Projects
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly mt-8 md:mb-24 lg:mt-16 lg:mx-12 lg:gap-12">
          <div className="card w-4/5 mb-12 md:3/4 md:mb-8 lg:mb-0 glass">
            <figure>
              <picture>
                <source media="(min-width: 768px)" srcSet={webstellar} type="image/png" />
                <img
                  src={webstellarMobile}
                  className="object-cover w-full h-full"
                  alt="webstellar app"
                />
                </picture>
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
                  <button className="btn btn-outline text-sm md:text-md lg:text-lg">Learn now!</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-4/5 md:h-3/4 glass">
            <figure>
            <picture>
                <source media="(min-width: 768px)" srcSet={weather} type="image/png" />
                <img
                  src={weatherMobile}
                  className="object-cover w-full h-full"
                  alt="weather app"
                />
                </picture>              
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
                  <button className="btn btn-outline text-sm md:text-md lg:text-lg">Learn now!</button>
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
