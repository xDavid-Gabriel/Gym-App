import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { useStateContext } from "../context/ContextProvider";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="lg:mt-28 p-5">
      <h3 className="text-headline dark:text-white uppercase">
        Ejercicios similares de{" "}
        <span style={{ color: `${currentColor}` }}>músculo objetivo</span>
      </h3>
      <div className="flex  relative">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>

      <h3 className="text-headline dark:text-white uppercase">
        Ejercicios de <span style={{ color: `${currentColor}` }}>equipo</span>{" "}
        similares
      </h3>
      <div className="flex  relative">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
