import { Component } from "react";
import Heading from "./components/heading/Heading";
import Reset from "./components/reset/Reset";
import Simulation from "./components/simulation/Simulation";
import Theory from "./components/theory/Theory";
class App extends Component {
  render(){
    return (
      <div>
          <Heading />
          <Theory />
          <br /><br />
          <Simulation />
          <Reset />
      </div>
    );
  };
}

export default App;
