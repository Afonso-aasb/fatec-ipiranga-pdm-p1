import { Component } from "react";
import { Busca } from "./components/Busca.jsx";

export class App extends Component {
  render() {
    return (
      <>
        <div className="flex w-full">
          <div className="flex w-6 justify-content-center p-4">
            <Busca></Busca>
          </div>
        </div>
      </>
    );
  }
}

export default App;
