import Button from "./Button";
import { useStateContext } from "../context/ContextProvider";
import HeroBannerImage from "../assets/images/gym.png";
import { Decoracion2 } from "../data/data";

const HeroBanner = () => {
  const { currentColor } = useStateContext();
  // console.log(currentColor);

  return (
    <div className="mt-20 p-5">
      <div className=" row items-center md:h-[670px]">
        <div className="col-12 col-md-6">
          <p className="text-rayado text-display">HAZ TU</p>

          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-[100px] dark:text-white">
            FORMA DEL CUERPO
          </h1>
          <p className="text-display-base my-4 dark:text-white">
            Mira los ejercicios más efectivos
          </p>
          <Button
            color="white"
            bgColor={currentColor}
            text="Explorar ejercicios"
            borderRadius="5px"
          />
        </div>
        <div
          className="col-12 col-md-6 relative h-[574px] md:h-full"
          style={{ backgroundColor: `${currentColor}` }}
        >
          <img
            src={HeroBannerImage}
            alt="Banner"
            className="absolute right-0 z-10 w-[658px]  object-cover bottom-0"
          />
          <div className="absolute h-full fill-[#FFFAFB] dark:fill-[#0D1117] left-0">
            <Decoracion2 width="100%" height="100%" color="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
