import { Link } from "react-router-dom";
// import Logo from "../assets/images/Logo.png";
import { useStateContext } from "../context/ContextProvider";
import { Tuerca, Logo } from "../data/data";
import Settings from "./Settings";

const Navbar = () => {
  const { currentColor, isClicked, handleClick } = useStateContext();
  return (
    <nav className="nav">
      <Link to="/">
        {/* <img src={Logo} alt="Logo" className="w-12 h-12 my-0 mx-5" /> */}
        <div className="fill-black dark:fill-white">
          <Logo
            width="48"
            height="48"
            colorMarron="inherit"
            color={currentColor}
          />
        </div>
      </Link>
      <div className="flex gap-10 text-2xl flex-col sm:flex-row items-center">
        {/* <Link to="/" className={`text-[#3A1212] border-b-2 border-b-[${currentColor}]`}
        >
          Home
        </Link> */}
        <Link
          to="/"
          className="text-black dark:text-white"
          style={{ borderBottom: `2px solid ${currentColor}` }}
        >
          Inicio
        </Link>
        <a href="#exercises" className="text-[#3A1212] dark:text-white">
          Ejercicios
        </a>
      </div>
      {/* Mi boton de Ajustes o configuraciòn */}
      <div className=" cursor-pointer" onClick={() => handleClick("temas")}>
        <Tuerca width="30" height="30" color={currentColor} />
      </div>

      {/* El modal */}
      {isClicked.temas && <Settings />}
    </nav>
  );
};

export default Navbar;
