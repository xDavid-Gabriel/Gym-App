import { useStateContext } from "../context/ContextProvider";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  const { currentColor } = useStateContext();
  if (!exerciseVideos.length) return "Cargando...";
  // console.log(exerciseVideos);

  return (
    <div className="mt-5 lg:mt-52 p-5">
      <h3 className="text-headline dark:text-white uppercase">
        Ver{" "}
        <span style={{ textTransform: "uppercase", color: `${currentColor}` }}>
          {name}{" "}
        </span>
        videos de ejercicios
      </h3>
      <div className="grid-cards gap-10">
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="w-full h-[280px] object-cover"
            />
            <div className="p-4">
              <h5
                style={{ color: `${currentColor}` }}
                className="text-note dark:text-white"
              >
                {item.video.title}
              </h5>
              <p className="text-[#606060] dark:text-white my-4">
                {item.video.channelName}
              </p>
              <div className="flex dark:text-white gap-2 items-center">
                <span className="text-[#606060] dark:text-white">
                  {item.video.viewCountText}
                </span>
                <div className="w-[5px] h-[5px] bg-[#606060] dark:bg-white rounded-full"></div>
                <span className="text-[#606060] dark:text-white">
                  {item.video.publishedTimeText}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
