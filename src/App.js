import "./App.css";
import logo from "./images/logo-M6.jpg";
import data from "./data/data";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="logo M6" />
        <h2>M6</h2>
      </header>
      <main className="main">
        {data.map((item, index) => {
          return (
            <Section
              key={index}
              time={item.time}
              title={item.title}
              type={item.type}
              duration={item.duration}
              image={item.image}
              isUnseen={item.isUnseen}
              direct={item.direct}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
