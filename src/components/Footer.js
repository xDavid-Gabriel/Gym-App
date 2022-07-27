// import Logo from "../assets/images/Logo-1.png";
import { Logo, LogoLetra } from "../data/data";
import { useStateContext } from "../context/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-10 items-center px-10 pt-6">
        <div className="flex items-center gap-3">
          <div className="fill-black dark:fill-white">
            <Logo
              width="48"
              height="48"
              colorMarron="inherit"
              color={currentColor}
            />
          </div>
          <LogoLetra width="150" height="150" color={currentColor} />
        </div>
        <h5 className="pb-10 mt-5 dark:text-white">Hecho con ❤️ por David</h5>
      </div>
    </div>
  );
};

export default Footer;
