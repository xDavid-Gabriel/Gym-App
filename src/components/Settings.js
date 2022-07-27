import { temaColores, IconCerrar, IconCheck } from "../data/data";
import { useStateContext } from "../context/ContextProvider";
import Button from "./Button";
import Sol from "../assets/images/sol.png";
import Luna from "../assets/images/luna.png";

const Settings = () => {
  const {currentColor, setColor, modes, handleModeChange } = useStateContext();
  console.log(modes === "dark");
  return (
    <div className="settings">
        <div className="settings__title">
          <h6 className="text-caption my-3 dark:text-white">Tema de colores</h6>
          <div className="dark:fill-white">
            <Button
              icon={<IconCerrar width="25" height="25" color="inherit" />}
              borderRadius="50%"
              bgHover="white"
            />
          </div>
        </div>
        
        {/* Colores */}
        <div className="flex gap-3 flex-wrap">
          {temaColores.map((item, key) => (
            <button
              key={key}
              className="w-10 h-10 rounded-full cursor-pointer"
              style={{ backgroundColor: item.color }}
              onClick={() => setColor(item.color)}
              
            >
              <div className={item.color === currentColor ? "block": "hidden"}>
              <IconCheck width="20" height="20" color="white"/>
              </div>
            </button>
          ))}
        </div>
        {/* El checbox para el modo Dark y Light */}
        <div className="switch-checkbox">
          <h6 className="text-caption my-3 dark:text-white">
            Modo Dark y Light
          </h6>
          <label className="switch">
            <input
              type="checkbox"
              //Es falso y mantiene el checked desactivado
              checked={modes === "dark"}
              onChange={handleModeChange}
              
            />
            <span className="slider">
              <img src={Sol} alt="Sol" />
              <img src={Luna} alt="Luna" />
            </span>
          </label>
        </div>
    
    </div>
  );
};

export default Settings;
