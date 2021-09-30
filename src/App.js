import { Component } from "react";
import Heading from "./components/heading/Heading";
import Simulation from "./components/simulation/Simulation";
import Theory from "./components/theory/Theory";
class App extends Component {
  render(){
    return (
      <div>
          <Heading />
          <br /><br /><br />
          <Simulation />
          <Theory />
      </div>
    );
  };
}

export default App;
