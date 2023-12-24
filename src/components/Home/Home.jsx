import martinMobile from "../../assets/martinMobile.jpg";
import martin from "../../assets/martin.jpg";
import cv from "../../files/CV_MartinROUAULT.pdf";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../About/Skills";

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
                loading="lazy"
              />
            </picture>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl mx-auto">
              Hello, my name is <span className="text-primary">Martin Rouault.</span>
            </h1>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl py-6">
              I'm a creative web developer based in Paris, France.
            </p>
          </div>
        </div>
      </section>
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default Home;
