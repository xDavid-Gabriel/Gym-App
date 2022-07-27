//Componente para hacer scroll con las flechas o el dedo, no con el cursor del mause
//Llamar a los componentes ScrollMenu, VisibilityContext
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
//importar useContext esto es lo que nesesita el "VisibilityContext" un contexto
import { useContext } from "react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { Box } from "@mui/system";
import { FlechaDerecha, FlechaIzquierda } from "../data/data";
import { useStateContext } from "../context/ContextProvider";

//Flecha izquierda
const LeftArrow = () => {
  //Desestructuramos el scrollPrev de "VisibilityContext"
  const { scrollPrev } = useContext(VisibilityContext);
  const { currentColor } = useStateContext();
  return (
    <p
      //Ponerlo en el onclick para escrolee a la izquierda
      onClick={() => scrollPrev()}
      className="right-arrow"
    >
      <FlechaIzquierda width="50" height="50" color={currentColor} />
    </p>
  );
};

//Flecha derecha

const RightArrow = () => {
  //Desestructuramos el scrollNext de "VisibilityContext"
  const { scrollNext } = useContext(VisibilityContext);
  const { currentColor } = useStateContext();
  return (
    <p
      //Ponerlo en el onclick para escrolee a la derecha
      onClick={() => scrollNext()}
      className="left-arrow"
    >
      <FlechaDerecha width="50" height="50" color={currentColor} />
    </p>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {
  console.log(bodyParts);
  return (
    //Usar el componente ScrollMenu dentro de la caja donde se hara scroll
    <ScrollMenu
      //Ponerle estos dos parametros segun la funcion que hemos creado para la flecha izquierda y derecha
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data.map((item) => (
        <Box
          //Ponerle el key, title
          key={item.id || item}
          //y importante el itemId para que las flechas funcionen
          itemId={item.id || item}
          title={item.id || item}
          className="my-0 mx-10"
        >
          {bodyParts ? (
            <BodyPart
              //La data de categoria
              item={item}
              //El string "all"
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
