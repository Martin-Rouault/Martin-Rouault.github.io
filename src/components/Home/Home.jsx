import martin from "../../assets/martin.jpg";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <img
            src={martin}
            className="max-w-xs lg:max-w-md xl:max-w-md rounded-3xl shadow-2xl"
            alt="Martin Rouault"
          />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">Hello, my name is <br/>Martin Rouault.</h1>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br/>In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-sm md:text-md lg:text-lg xl:text-xl"><a href="" download='MartinCv.png'>Download my CV here!</a></button>
          </div>
          
        </div>
      </section>
      <section
        className="p-6 md:p-12 mx-auto my-16 lg:my-32 rounded-2xl w-11/12 md:w-4/5 border-solid border-2 border-zinc-600 shadow-2xl glass"
        id="skills"
      >
        <div className="text-center lg:flex lg:flex-row lg:justify-around lg:gap-24">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Front-end</h3>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              JavaScript, React, Next.js, Tailwind CSS, HTML, CSS, SASS, Bootstrap
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Back-end</h3>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              PHP, Laravel, Node.js, Express.js, MySQL, MongoDB
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">Other</h3>
            <p className="text-md mt-2 md:mt-4 lg:mt-6">
              Git, GitHub, Heroku, Netlify, Vercel, Figma, Adobe XD, Photoshop, Illustrator
            </p>
          </div>
        </div>
      </section>
      </>
  );
};

export default Home;
