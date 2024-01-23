import cv from "../../files/CV_Martin-Rouault.pdf";

const Contact = () => {
  return (
    <>
      <section className="p-14 flex flex-col lg:flex-row  justify-between mx-auto border-solid border-y border-gray-500">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left mb-8 lg:mb-0">
          Interested in working together ?
        </p>
      <div className="flex flex-col gap-4 items-center lg:flex-row">
        <a
          className="shadow-[#4433FF] shadow-md btn btn-primary text-white text-md md:text-xl font-medium"
          href={cv}
          download
        >
          Download my CV{" "}
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
        <a
          className="shadow-lg btn btn-ghost text-md md:text-xl font-medium"
          href="mailto:tintinmilou933@gmail.com"
        >
          Contact me &#x2709;
        </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
