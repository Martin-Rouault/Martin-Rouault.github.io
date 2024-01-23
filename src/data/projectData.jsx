import webstellarMobile from "../assets/webstellarMobile.webp";
import oWeatherMobile from "../assets/weatherMobile.webp";

const projectsData = [
  {
    title: "WebStellar",
    description:
      "WebStellar, a collaborative project from my training, is an online platform dedicated to exploring the digital realm. Inspired by our fascination with astronomy and space, WebStellar provides an immersive online experience where users can explore, learn, and engage with the vast digital universe.",
    technologies: ["React", "Symfony"],
    image: webstellarMobile,
    link: "https://webstellar.io/",
  },
  {
    title: "O-Weather",
    description: "O'Weather is a weather app that allows you to search for a city. It displays the weather, temperature, wind of the city you are looking for.",
    technologies: ["React"],
    image: oWeatherMobile,
    link: "https://o-weather.surge.sh/",
  }
];

export default projectsData;
