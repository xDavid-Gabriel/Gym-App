import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
//Para cambiar el color de mi paginaciòn
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { useStateContext } from "../context/ContextProvider";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  //Para cambiar el color de mi paginaciòn
  const { currentColor } = useStateContext();
  const theme = createTheme({
    palette: {
      primary: {
        main: currentColor,
      },
    },
  });
  ////////////////////////////////////////////

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;
  // Esta variable multiplica la pagina 1,2,3,..18 donde estemos metidos x o por 9 va en el segundo parametro del slice()
  const indexOfLastExercise = currentPage * exercisesPerPage;

  // Esta variable resta el resultado de  la variable "indexOfLastExercise" - menos 9 este va en el primer parametro del slice()
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  // Todos los ejercicios traidos se pondran en la funcion slice(), primero parametro lo que se resta, luego como segundo parametro lo que se multiplica
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // console.log(exercises);
  // Esta funcion "paginate" esta en un onChange y los parametros que tienen, viene de la libreria material UI, el "e" es el evento y "value" es los numeros de paginas donde esta activo cuando se hace click sobre ellos, activa el valor 1,2,3,...18 donde esta
  const paginate = (e, value) => {
    console.log(value);
    setCurrentPage(value);
    //Cuando se clickea scrolea hacia arriba con 1800 pixeles indicados
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  /* ====== URL ======*/
  const URL_ALL = "https://exercisedb.p.rapidapi.com/exercises";
  const URL_CATEGORIAS = "https://exercisedb.p.rapidapi.com/exercises/bodyPart";

  useEffect(() => {
    //Listar todos los ejercicios
    const fetchExercisesData = async () => {
      let exercisesData = [];
      //Si mi bodyPart esta en all Listara todos los ejercicios
      if (bodyPart === "all") {
        exercisesData = await fetchData(URL_ALL, exerciseOptions);
      }
      //Si cambia el bodyPart a otra categoria los filtrara por ahi
      else {
        exercisesData = await fetchData(
          `${URL_CATEGORIAS}/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);
  return (
    <div id="exercises" className="lg:mt-28 mt-14 p-3 overflow-x-hidden">
      <h3 className="text-headline dark:text-white text-rayado uppercase">
        Mostrando resultados
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </div>
      {/* La Paginacion */}
      <div className="flex mt-28 justify-center items-center">
        {exercises.length > 9 && (
          <ThemeProvider theme={theme}>
            <div className="dark:text-white">
              <Pagination
                color="primary"
                shape="rounded"
                defaultPage={1}
                //count= muestra la fila de los numeros de la paginacòn 1,2,3,....18
                count={Math.ceil(exercises.length / exercisesPerPage)}
                //page= por defecto inicializa en 1 recorre las paginas y activa el color
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            </div>
          </ThemeProvider>
        )}
      </div>
    </div>
  );
};

export default Exercises;
