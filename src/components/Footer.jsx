//import logounal from '../assets/img/logounal.jpg';
const Footer = () => {
  return (
    <div className="text-center">
      <div className="p-10">
        <p className=" text-white">Proposed by</p>
        <a
          href="mailto:lrbecerrab@unal.edu.co"
          className=" text-white underline font-extralight"
        >
          Leyla Rocío Becerra Barajas
        </a>
        <p className=" text-white font-extralight">
          Maestría en Ingeniería de Sistemas y Computación
        </p>

        <br />
        <p className=" text-white">Directed by</p>
        <a
          href="mailto:jaroserog@unal.edu.co"
          className=" text-white underline font-extralight p-10"
        >
          Phd Javier Albeiro Rosero
        </a>
        <br />
        <a
          href="mailto:jecamargom@unal.edu.co"
          className=" text-white underline font-extralight p-10"
        >
          Phd Jorge Eliécer Camargo
        </a>
        <p className=" text-white font-extralight">
          Universidad Nacional de Colombia
        </p>
      </div>
    </div>
  );
};

export default Footer;
