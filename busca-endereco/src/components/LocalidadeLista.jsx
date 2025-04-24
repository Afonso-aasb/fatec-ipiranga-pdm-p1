import { Component } from "react";
import { Card } from "primereact/card";

export class LocalidadeLista extends Component {
  render() {
    const { localidades } = this.props;

    const LocalidadeCard = ({ cep, logradouro, bairro, localidade, uf }) => (
      <div className="w-full p-1 mb-4 rounded-lg shadow-md">
        <Card className="w-full text-center border-2 border-black">
          <p className="text-xl">{cep}</p>
          <p>{logradouro}</p>
          <p>{bairro}</p>
          <p>{localidade} - {uf}</p>
        </Card>
      </div>
    );

    return (
      <>
        {localidades && localidades.length > 0 &&
          localidades.map((item) => (
            <LocalidadeCard
              key={item.cep}
              cep={item.cep}
              logradouro={item.logradouro}
              bairro={item.bairro}
              localidade={item.localidade}
              uf={item.uf}
            />
          ))
        }
      </>
    );
  }
}

export default LocalidadeLista;
