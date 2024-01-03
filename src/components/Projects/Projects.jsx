import webstellar from "../../assets/webstellar.png";
import weather from "../../assets/weather.png";
import weatherMobile from "../../assets/weatherMobile.webp";
import webstellarMobile from "../../assets/webstellarMobile.webp";

const Projects = () => {
  return (
    <>
      <div className="my-14 lg:my-20 mx-auto mb-16 lg:mb-32">
        <div className="text-center">
          <h2
            id="projects"
            className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold"
            data-aos="fade-down"
          >
            My Projects
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-evenly mt-8 md:mb-24 lg:mt-16 lg:gap-12">
          <div className="card w-full lg:w-2/4 my-12 md:mb-8 lg:mb-0 border border-gray-500 shadow-xl">
            <figure>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={webstellar}
                  type="image/png"
                />
                <img
                  src={webstellarMobile}
                  className="object-cover w-full h-full"
                  alt="webstellar app"
                  loading="lazy"
                />
              </picture>
            </figure>
            <div className="card-body mt-4">
              <article>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                WebStellar
              </h2>
              <p className="text-sm text-justify md:text-md lg:text-lg mb-4">
                WebStellar, a collaborative project from my training, is an
                online platform dedicated to exploring the digital realm.
                Inspired by our fascination with astronomy and space, WebStellar
                provides an immersive online experience where users can explore,
                learn, and engage with the vast digital universe.
              </p>
              </article>
              <div className="card-actions justify-end">
                <a
                  href="https://webstellar.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-ghost border-current hover:border-primary rounded-lg shadow-inner text-sm md:text-md lg:text-lg">
                    Visit now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full lg:w-2/4 border border-gray-500 shadow-xl">
            <figure>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={weather}
                  type="image/png"
                />
                <img
                  src={weatherMobile}
                  className="object-cover w-full h-full"
                  alt="weather app"
                  loading="lazy"
                />
              </picture>
            </figure>
            <div className="card-body mt-4">
              <article className="">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                O-Weather
              </h2>
              <p className="text-sm text-justify md:text-md lg:text-lg mb-4">
                O'Weather is a weather app that allows you to search for a city.
                It displays the weather, temperature, wind of the city you are looking for.<br/>
                This project is using the <span className="font-semibold"> OpenWeatherMap API.</span>
              </p>
              </article>
              <div className="card-actions justify-end">
                <a
                  href="https://o-weather.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-ghost border-current hover:border-primary rounded-lg shadow-inner text-sm md:text-md lg:text-lg">
                    Visit now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
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
