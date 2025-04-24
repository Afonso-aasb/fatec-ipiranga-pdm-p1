import { Component } from "react";
import { Busca } from "./components/Busca.jsx";
import { LocalidadeLista } from "./components/LocalidadeLista.jsx"

export class App extends Component {
  render() {
    return (
      <>
        <div className="flex w-full">
          <div className="flex-column w-6 justify-content-center p-4">
            <Busca></Busca>
            <LocalidadeLista />
          </div>
        </div>
      </>
    );
  }
}

export default App;
