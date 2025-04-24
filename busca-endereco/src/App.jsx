import { Component } from "react";
import { Busca } from "./components/Busca.jsx";
import { LocalidadeLista } from "./components/LocalidadeLista.jsx";
import cepClient from "./utils/cepClient.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localidadesBuscadas: [],
    };
  }

  onBuscaRealizada = (cep) => {
    if (cep == "") {
      alert("CEP inválido!");
      return;
    }

    let regexcep = /^[0-9]{8}$/;
    if (!regexcep.test(cep)) {
      alert("CEP inválido!");
      return;
    }

    cepClient.get(`${cep}/json/`).then((response) => {
      console.log(response.data);

      if (response.data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      this.setState({
        localidadesBuscadas: [response.data, ...this.state.localidadesBuscadas],
      });
    });
  };

  render() {
    return (
      <>
        <div className="flex w-full">
          <div className="flex-column w-6 justify-content-center p-4">
            <Busca onBuscaRealizada={this.onBuscaRealizada} />
            <LocalidadeLista localidades={this.state.localidadesBuscadas} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
