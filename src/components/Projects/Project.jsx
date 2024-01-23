import { NavLink } from "react-router-dom";
import webstellarMobile from "../../assets/webstellarMobile.webp";

const Project = () => {
  return (
    <>
      <section className="flex justify-center text-center md:justify-between md:text-left">
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Last project
          </h2>
          <p className="text-sm md:text-md lg:text-lg mt-3">
            Discover my last projects
          </p>
        </div>
        <NavLink
          to="/projects"
          className="hidden md:btn md:btn-ghost md:text-xl"
        >
          All my projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </NavLink>
      </section>
      <section className="my-24 flex flex-col justify-center items-center md:block">
        <div
          data-aos="flip-left"
          data-aos-delay="100"
          className="card card-compact w-full md:w-7/12 lg:w-5/12 backdrop-blur-2xl shadow-2xl"
        >
          <NavLink to="/projects">
            <div className="card-body flex flex-row justify-between hover:text-primary">
              <h2 className="card-title text-sm md:text-lg lg:text-xl">
                WebStellar
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </NavLink>
          <figure>
            <img src={webstellarMobile} loading="lazy" alt="webstellar app" />
          </figure>
        </div>
        <div className="text-center mt-24">
          <NavLink
            to="/projects"
            id="link-projects"
            className="md:hidden btn btn-ghost md:text-xl"
          >
            All my projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Project;
