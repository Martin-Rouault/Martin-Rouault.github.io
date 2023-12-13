import martinMobile from "../../assets/martinMobile.jpg";
import martin from "../../assets/martin.jpg";
import cv from "../../files/CV_MartinROUAULT.pdf";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center lg:w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
          <div className="">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={martin}
                loading="lazy"
              />
              <img
                src={martinMobile}
                className="w-4/5 h-4/5 sm:w-3/6 sm:h-2/5 lg:w-3/4 lg:h-2/5 xl: mx-auto rounded-3xl shadow-2xl"
                alt="Martin Rouault"
              />
            </picture>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl mx-auto">
              Hello, my name is Martin Rouault.
            </h1>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl py-6">
              I'm a creative web developer based in Paris, France.
            </p>
            <a
              className="btn-cv btn btn-outline btn-info text-sm md:text-md lg:text-lg xl:text-xl"
              href={cv}
              download
            >
              Download my CV here!
            </a>
          </div>
        </div>
      </section>
      <section
        className="p-6 md:p-12 mx-auto my-16 lg:my-32 rounded-2xl w-11/12 md:w-4/5 border-solid border-2 shadow-2xl glass"
        id="skills"
      >
        <div className="text-center lg:flex lg:flex-wrap justify-center">
          <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
            <h2 className="flex justify-center items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
              Dynamic
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
              </svg>
            </h2>
            <p className="text-md mt-2 md:mt-4 lg:mt-6 text-center">
              Capacity to quickly adapt to new work environments.
            </p>
          </div>
          <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
            <h2 className="flex justify-center items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
              Open-minded
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
            </h2>

            <p className="text-md mt-2 md:mt-4 lg:mt-6 text-center">
              Capacity to consider everyone's idea and promote team work.
            </p>
          </div>
          <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
            <h2 className="flex justify-center items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
              Dedicated
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </h2>
            <p className="text-md mt-2 md:mt-4 lg:mt-6 text-center">
              Eager to give 100% in every projects and push to get the best
              results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
