import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
  //Almacenara los ejercicios del detalle
  const [exerciseDetail, setExerciseDetail] = useState({});
  //Almacenara los ejercicios de los videos con el nombre pasado del detalle
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  // Variable general para la url de los ejercios del detalle
  const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

  // Variable para la url de youtube
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        // Variable para la url de los ejercios del detalle con los valores el "id" con la key
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        //setExerciseDetail pondra toda la data del detalle dentro de la variable exerciseDetailData
        setExerciseDetail(exerciseDetailData);
        //////////////////////////////////////////////////////////////////////////////
        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
          youtubeOptions
        );
        //setExerciseVideos pondra toda la data de youtube dentro de la variable exerciseVideosData
        setExerciseVideos(exerciseVideosData.contents);
        // console.log(exerciseVideosData);
        //////////////////////////////////////////////////////////////////////////////
        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        //////////////////////////////////////////////////////////////////////////////
        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Detail
        //El parametro que tendra exerciseDetail con toda la data del detalle dentro
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetails;
