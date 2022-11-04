import "./App.css";
import Container from "./Container/container";
import NavBar from "./NavBar/navBar";
import Title from "./Title/title";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/a5/91/17/a59117a046cbc0082afe2ce27622c0c4.jpg")`,
      }}
    >
      <NavBar />
      <Title />
      <Container />
    </div>
  );commit
}

export default App;
