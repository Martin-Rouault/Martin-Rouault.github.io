import martinMobile from "../../assets/martinMobile.jpg";
import martin from "../../assets/martin.jpg";
import cv from "../../files/CV_MartinROUAULT.pdf"

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <picture>
            <source media="(min-width: 768px)" srcSet={martin}/>
          <img
            src={martinMobile}
            className="w-4/5 h-4/5 sm:w-3/6 sm:h-2/5 lg:w-3/5 lg:h-3/5 xl: mx-auto rounded-3xl shadow-2xl"
            alt="Martin Rouault"
          />
          </picture>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">Hello, my name is Martin Rouault.</h1>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl py-6">
              I'm a creative web developer based in Paris, France.
            </p>
            <a className="btn btn-outline text-sm md:text-md lg:text-lg xl:text-xl" href={cv} download>Download my CV here!
            </a>
          </div>
          
        </div>
      </section>
      <section
        className="p-6 md:p-12 mx-auto my-16 lg:my-32 rounded-2xl w-11/12 md:w-4/5 border-solid border-2 shadow-2xl glass"
        id="skills"
      >
        <div className="text-center lg:flex lg:flex-row lg:justify-around lg:gap-24">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Front-end</h2>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              JavaScript, React, Tailwind CSS, SCSS
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Back-end</h2>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              PHP
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Other</h2>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              Git & GitHub, Redux
            </p>
          </div>
        </div>
      </section>
      </>
  );
};

export default Home;
