import { Component } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export class Busca extends Component {
  state = {
    cep: "",
  };

  onTermoAlterado = (event) => {
    this.setState({ cep: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    alert(this.state.cep);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="w-full">
        <div className="flex w-full py-4 flex-column gap-2">
          <FloatLabel className="w-full">
            <InputText
              id="inputCep"
              className="w-full"
              onChange={this.onTermoAlterado}
              value={this.state.cep}
            />
            <label htmlFor="inputCep">Digite o CEP</label>
          </FloatLabel>
          <Button label="Ok" />
        </div>
      </form>
    );
  }
}

export default Busca;
