import { Meditacion, Sentadilla, Pesas } from "../data/data";
import { useStateContext } from "../context/ContextProvider";

const Detail = ({ exerciseDetail }) => {
  const { currentColor } = useStateContext();

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: <Meditacion width="50" height="50" color={currentColor} />,
      name: bodyPart,
    },
    {
      icon: <Sentadilla width="50" height="50" color={currentColor} />,
      name: target,
    },
    {
      icon: <Pesas width="50" height="50" color={currentColor} />,
      name: equipment,
    },
  ];

  return (
    <div className="detail">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="detail__content">
        <h3 className="capitalize text-headline font-bold dark:text-white">
          {name}
        </h3>
        <p className="text-[#4F4C4C] dark:text-white">
          Los ejercicios te mantienen fuerte.{" "}
          <span className="capitalize">{name}</span> es uno de los mejores
          ejercicios para apuntar a tu {target}. Te ayudará a mejorar tu estado
          de ánimo y ganar energía.
        </p>

        {extraDetail.map((item, key) => (
          <div className="detail__icons" key={key}>
            <button className="detail__icons-btn">
              <div>{item.icon}</div>
            </button>
            <h5 className="capitalize dark:text-white">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
