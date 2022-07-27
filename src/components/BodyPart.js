import {
  All,
  Back,
  Cardio,
  Chest,
  LowerArms,
  Sentadilla,
  Neck,
  Shoulders,
  UpperArms,
  UpperLegs,
  Waist,
} from "../data/data";
import { useStateContext } from "../context/ContextProvider";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const { currentColor } = useStateContext();
  return (
    <div
      className="body-part bodyPart-card"
      style={
        bodyPart === item ? { borderTop: `4px solid ${currentColor}` } : {}
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {item === "all" ? (
        <All width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "back" ? (
        <Back width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "cardio" ? (
        <Cardio width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "chest" ? (
        <Chest width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "lower arms" ? (
        <LowerArms width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "lower legs" ? (
        <Sentadilla width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "neck" ? (
        <Neck width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "shoulders" ? (
        <Shoulders width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "upper arms" ? (
        <UpperArms width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "upper legs" ? (
        <UpperLegs width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      {item === "waist" ? (
        <Waist width="50" height="50" color={currentColor} />
      ) : (
        ""
      )}
      <p className="text-2xl font-bold text-black uppercase dark:text-white">
        {item}
      </p>
    </div>
  );
};

export default BodyPart;
