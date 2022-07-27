import { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
//setExercises
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  //Para poder escribir en la busqueda
  const [search, setSearch] = useState("");
  //Aca tendra todos mi busqueda de ejercicios
  // const [exercises, setExercises] = useState([]);
  //Para poder filtrar ejercicios por categorias
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    //Esta funcion cargara los ejercicios por categorias
    const fetchExercisesData = async () => {
      //En esta variable obtengo las categorias
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      // setBodyParts obtendra "all" y una copia de las categorias obtenidas
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);
  // console.log(bodyParts);

  const handleSearch = async () => {
    try {
      //Todas mis busqueda de ejercicios
      if (search) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises", // /bodyPartList
          exerciseOptions
        );
        // console.log(exercisesData);
        const searchedExercises = exercisesData.filter(
          (exercises) =>
            exercises.name.toLowerCase().includes(search) ||
            exercises.target.toLowerCase().includes(search) ||
            exercises.equipment.toLowerCase().includes(search) ||
            exercises.bodyPart.toLowerCase().includes(search)
        );
        setSearch("");
        setExercises(searchedExercises);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { currentColor } = useStateContext();
  return (
    <div className="search">
      <h2 className="text-display text-center dark:text-white mb-16 uppercase">
        <span className="text-rayado">Ejercicios Que</span> <br />
        Debes Saber
      </h2>
      <span className="dark:text-white my-8 block">
        Nota: Estos ejercicios están llamando a una API en inglés, así que si
        quieres buscar ejercicios, deberás hacerlo en inglés como cardio, cable,
        ches, etc.
      </span>
      <div className="relative mb-16 w-full lg:w-1000">
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Buscar Ejercicios"
        />

        <button
          className="search-btn"
          style={{ backgroundColor: `${currentColor}` }}
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
      <div className="relative w-full p-5">
        <HorizontalScrollbar
          //Prural trendra las categorias
          data={bodyParts}
          bodyParts
          // bodyPart Simplemente tiene un "all" en el estado
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};
//bg-[${currentColor}] hover:border-2 hover:border-[${currentColor}] hover:bg-transparent text-[${currentColor}]

export default SearchExercises;
