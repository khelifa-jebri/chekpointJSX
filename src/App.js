import "./App.css";
import "./style.css";
import logo from "./zidan.jpg"

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

        <h1 className="title red">Khalifa Jabri</h1>

        <br/>

        <img src={logo} alt="Zin Eddin Zidane" width="200"/>

        <br/>

        <img src="/maldini.jpg" alt="Palo Maldini" width="200"/>

      </div>

      <video width="320" height="240" controls>

        <source src="/ES6.mp4" type="video/mp4" />

      </video>
    
    </div>
  );
}

export default App;
