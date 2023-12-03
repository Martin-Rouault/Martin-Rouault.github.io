import martin from "../../assets/martin.jpg";

const About = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center text-center">
          <div className="hero-content flex-col">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About</h2>
              <p className="text-md md:text-lg lg:text-xl py-4">
                Thank you for stopping by. Read below to learn more about
                myself.
              </p>
            </div>
            <img src={martin} className="max-w-xs md:max-w-md rounded-3xl shadow-2xl" />
          </div>
        </div>
        <section className="mt-20">
          <div className="text-center lg:flex lg:flex-row lg:items-start lg:justify-start lg:align-start">
            <p className="text-lg mb-2 lg:mb-0 lg:mr-4 self-start md:text-xl lg:text-2xl font-semibold">Background</p>
            <p className="text-sm sm:text-md md:text-lg lg:text-base xl:text-lg px-4">
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            </p>
        </div>
        </section>
        <section className="mt-20 mb-16 lg:mb-32">
          <div className="text-center lg:flex lg:flex-row lg:items-start lg:justify-start lg:align-start">
            <p className="text-lg mb-2 lg:mb-0 lg:mr-4 self-start md:text-xl lg:text-2xl font-semibold">Skills</p>
            <p className="text-sm sm:text-md md:text-lg lg:text-base xl:text-lg px-4">
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            </p>
        </div>
        </section>
      </div>
    </>
  );
};


export default About;
