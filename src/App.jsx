import "./App.css";

//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
import Button from "./components/Button/Button";
import Homework02 from "./homeworks/Homework02/Homework02";
import Lesson02 from "./lessons/Lesson02/Lesson02";
function App() {
  return (
    <div className="app">
     {/* <Button />
      <Button />
      <Button />*/}
      <Lesson02/>
      <Homework02/>
    </div>
  );
}

export default App;
