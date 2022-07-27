import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const ExerciseCard = ({ exercise }) => {
  const { currentColor } = useStateContext();
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{ borderTop: `4px solid ${currentColor}` }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="flex flex-col xl:flex-row gap-5">
        <button className="text-white bg-[#ffa9a9] text-sm rounded-3xl capitalize p-2">
          {exercise.bodyPart}
        </button>
        <button className="text-white bg-[#fcc757] text-sm rounded-3xl capitalize p-2">
          {exercise.target}
        </button>
      </div>
      <p className="text-black font-bold  capitalize text-2xl">
        {exercise.name}
      </p>
    </Link>
  );
};

export default ExerciseCard;
