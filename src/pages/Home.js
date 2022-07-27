import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <>
      <HeroBanner />
      <SearchExercises
        //Todavia no se usa setExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        //Todavia no se usa setExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </>
  );
};

export default Home;
