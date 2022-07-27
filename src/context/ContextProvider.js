import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  temas: false,
};

// Exportar el contexto
export const ContextProvider = ({ children }) => {
  /* ==== Para activar el Modo Dark ==== */

  //El "light" solamente es la guia de que mantendra por defecto cuando sea falso
  const [modes, setModes] = useState("light");

  const handleModeChange = (e) => {
    const isChecked = e.target.checked;
    // setModes(isChecked ? "dark" : "light");
    const modedentro = isChecked ? "dark" : "light";
    console.log(isChecked);
    localStorage.setItem("themeMode", modedentro);
    //Este setModes tiene el "light"
    setModes(modedentro);
    console.log(modedentro);
  };

  /* ==== Tema de colores ==== */
  const [currentColor, setCurrentColor] = useState("#ACDF41");
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    //Para ocultar el modal
    setIsClicked(initialState);
  };
  /* ==== Para activar el modal de Temas ==== */
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        //El modo dark y light
        modes,
        setModes,
        handleModeChange,
        //Cambiar los colores
        currentColor,
        setCurrentColor,
        setColor,
        ///Activar el Modal
        initialState,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
