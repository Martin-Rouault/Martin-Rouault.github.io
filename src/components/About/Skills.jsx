const Skills = () => {
  return (
    <section
      className="p-10 md:p-12 my-16 lg:my-48 rounded-2xl border border-gray-500 bg-transparent backdrop-blur-2xl shadow-2xl"
      id="skills"
    >
      <div className="text-left text-sm md:text-md lg:text-lg gap-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-20 ">
        <div className=" mb-6 lg:mb-0">
          <h2 className="flex justify-start items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
            Dynamic
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-primary"
            >
              <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
            </svg>
          </h2>
          <p className="text-base mt-2 md:mt-4 lg:mt-6 text-left leading-relaxed">
            Adapting swiftly to challenges, I embrace an energetic approach to
            projects. Open to learning and ready for teamwork, I easily adapt to
            change. Thriving in innovative environments, my curiosity fuels
            continuous improvement for a vibrant and productive outcome.
          </p>
        </div>
        <div className="mb-6 lg:mb-0">
          <h2 className="flex justify-start items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
            Open-minded
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-primary"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
            </svg>
          </h2>

          <p className="text-base mt-2 md:mt-4 lg:mt-6 text-left leading-relaxed">
            Always open to new ideas and perspectives. I accept criticism as a
            tool for improvement. I'm ready to listen and value the richness of
            varied viewpoints. Inclusive in my thinking, I contribute to an
            open-minded and creative work atmosphere.
          </p>
        </div>
        <div className="mb-6 lg:mb-0">
          <h2 className="flex justify-start items-center gap-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
            Dedicated
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-primary"
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
          <p className="text-base mt-2 md:mt-4 lg:mt-6 text-left leading-relaxed">
            I approach each project with dedication, focusing on consistent
            effort. Persistence is my approach to achieving goals, contributing
            reliably. I bring a strong work ethic to every task, aiming for
            meaningful impact. Devoted to project success, I work with
            determination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
