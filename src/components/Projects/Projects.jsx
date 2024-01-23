import { useState } from "react";
import projectsData from "../../data/projectData";

const Projects = () => {
  const maxDescriptionLenght = 150;
  const [showFullDescriptionn, setShowFullDescription] = useState(false);

  const handleDescription = () => {
    setShowFullDescription(!showFullDescriptionn);
    document.getElementById("description").classList.toggle("line-clamp-3");
  };

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
        <div className="w-full flex flex-col flex-wrap justify-center items-center lg:flex-row lg:justify-between mt-8 md:mb-24 lg:mt-16 ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card backdrop-blur-2xl lg:basis-5/12 my-12 md:mb-8 lg:mb-0 border border-gray-500 shadow-2xl"
            >
              <figure>
                <picture>
                  <img
                    src={project.image}
                    className="object-cover w-full h-full"
                    alt="webstellar app"
                    loading="lazy"
                  />
                </picture>
              </figure>
              <div className="card-body mt-4">
                <article>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                      {project.title}
                    </h2>
                  </div>
                  <p
                    id="description"
                    className={`text-sm text-justify md:text-md lg:text-lg mb-4 ${
                      project.description.length > maxDescriptionLenght
                        ? "line-clamp-3"
                        : ""
                    }`}
                  >
                    {project.description}
                  </p>
                  {project.description.length > maxDescriptionLenght && (
                    <button
                      className="text-sm md:text-md lg:text-lg hover:underline mb-4 text-zinc-500"
                      onClick={handleDescription}
                    >
                      {showFullDescriptionn ? "Read Less.." : "Read More.."}
                    </button>
                  )}
                </article>
                <div className="flex items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <button className="btn btn-ghost border-current rounded-lg shadow-inner text-sm md:text-md lg:text-lg">
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
                  {project.technologies.map((technology, index) => (
                    <div key={index} className="ml-auto">
                      <div className="text-current badge badge-outline p-3 lg:p-4 border-primary">
                        {technology}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
