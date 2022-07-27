import { useStateContext } from "../context/ContextProvider";

function Button({ icon, color, bgColor, text, borderRadius, bgHover }) {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <a
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, borderRadius, color }}
      href="#exercises"
      className={`boton hover:drop-shadow-xl font-medium`}
    >
      {icon} {text}
    </a>
  );
}

export default Button;
