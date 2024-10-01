import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../store/themeReducer";

export const DivWithStore = () => {
    const { theme } = useSelector((state) => state.toggleTheme)

    const dispatch = useDispatch();

  return (
    <div className={`main ${theme}`}>
    <p>Изменить тему: "{theme}"</p>
    <button onClick={() => {dispatch(toggleTheme())}}>на "{theme === 'dark' ? 'light' : 'dark'}"</button>
    </div>
  )
}