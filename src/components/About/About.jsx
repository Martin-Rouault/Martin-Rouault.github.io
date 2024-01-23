import martinMobile from "../../assets/martinMobile.jpg";

const About = () => {
  return (
    <>
      <section className="my-14 md:my-20">
        <h2
          id="about"
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          About
        </h2>
        <div className="flex items-center justify-center text-center">
          <div className="hero-content flex-col">
            <div className="mb-4">
              <p className="text-md md:text-lg lg:text-xl">
                Thank you for stopping by. Read below to learn more about
                myself.
              </p>
              <div className="flex justify-center items-center my-20">
                <img
                  src={martinMobile}
                  alt="me"
                  className="w-96 h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="p-6 md:p-12 mx-auto my-16 lg:my-24 bg-transparent backdrop-blur-xl shadow-xl border border-gray-500 rounded-2xl">
          <div className="text-left lg:flex lg:flex-col">
            <p className="text-lg mb mb-8 md:text-xl lg:text-2xl font-semibold">
              Background
            </p>
            <div className="flex flex-col gap-6 text-sm text-justify sm:text-md md:text-lg lg:text-base xl:text-lg lg:px-4">
              <p>I drop out of traditional school very early, it was on my 10th
              grade. I honestly didn't like school and I didn't know what I
              wanted to do in life. Not that I was a bad student, but I didn't
              have the motivation and I was a little lost.
              </p>
              <p>
              After that and for almost 4 years I was a student at the Pôle
              Innovant Lycéen in Paris. With this school, I was able to learn
              about the world of renewable energies and the environment and made
              several projects in this field, including three solidarity
              projects. <br />Two were in Cambodia and one in Nicaragua. Those
              projects were about the installation of solar panels, construction
              of water filters and helping children in schools.

              This experience allowed me to discover the world and to learn a
              lot about myself. <br />But of course, none of this is related to what I
              am doing today.
              </p>
              <p>
              I'm very new to the world of web development. I started learning
              basic HTML in 2022 and made my first but awful site :D. I was very curious about this field
              and I wanted to learn more. That's when I came across the O'clock
              School. I was very interested in their training and I decided to
              join them and honestly, even with all the frustration that I felt
              during the training, I don't regret it at all. <br />The program
              duration was 6 months. 4 months for the basics, HTML CSS for the
              first few weeks, then the loved and hated PHP language and
              JavaScript after that. 1 month for the speciality, I chose React.
              And the last month was for the <a href="https://webstellar.io" className="font-bold underline">final project.</a>
              </p>
              <p>It was very intense
              but I kept pushing myself and I learned a lot. Not only about web
              development but also about myself. I stimulated a part of my brain
              that I didn't know I had. And that's when I became addicted and
              passionate to build more and more projects !
              </p>
              <p>
              I'm trying constantly to improve my skills and to learn new
              things. The world of web development is very vast and keeps
              evolving at a very fast pace, it can be overwhelming sometimes but
              I'm always up for the challenge.
              </p>
            </div>
            <p className="text-center mt-8">Thank you for reading :)</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
