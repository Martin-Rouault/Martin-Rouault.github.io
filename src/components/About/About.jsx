import martin from "../../assets/martin.jpg";
import martinMobile from "../../assets/martinMobile.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <h2 id="about" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        About
      </h2>
      <div className="flex items-center justify-center text-center">
        <div className="hero-content flex-col">
          <div className="mb-4">
            <p className="text-md md:text-lg lg:text-xl">
              Thank you for stopping by. Read below to learn more about myself.
            </p>
          </div>
        </div>
      </div>
      <section className="p-6 md:p-12 mx-auto my-16 lg:my-24 w-full md:w-4/5">
        <div className="text-center lg:flex lg:flex-row lg:items-start lg:justify-start lg:align-start">
          <p className="text-lg mb-2 lg:mb-0 lg:mr-4 self-start md:text-xl lg:text-2xl font-semibold">
            Background
          </p>
          <p className="text-sm sm:text-md md:text-lg lg:text-base xl:text-lg lg:px-4">
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
      <section className="p-6 md:p-12 mx-auto my-16 lg:my-24 w-full md:w-4/5">
        <div className="text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            Skills
          </p>
          <p className="text-sm sm:text-md md:text-lg lg:text-base xl:text-lg lg:px-4">

          </p>
        </div>
      </section>
    </>
  );
};

export default About;
