import { Route, Routes } from "react-router-dom";
import ExerciseDetail from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useStateContext } from "./context/ContextProvider";

import { useEffect } from "react";
import "./App.css";
const App = () => {
  const { modes, setModes, setCurrentColor } = useStateContext();
  //w-400  xl:w-[1488px] m-auto
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setModes(currentThemeMode);
    }
  }, [setCurrentColor, setModes]);
  /* === Por si quiero usar useMemo === 
 const isDarkMode = useMemo(() => modes === "dark", [modes]);
 */
  const isDarkMode = modes === "dark";
  // console.log(isDarkMode);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-[#0D1117]">
        <div className="max-w-[1488px] m-auto relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
