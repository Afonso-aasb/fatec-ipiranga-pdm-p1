import { Component } from "react";
import { Card } from "primereact/card";

export class LocalidadeLista extends Component {
  state = {
    localidades: [
      {
        cep: "04094-050",
        logradouro: "Avenida Pedro Álvares Cabral",
        localidade: "Parque Ibirapuera",
        estado: "São Paulo",
        uf: "SP",
      },
      {
        cep: "55592-970",
        logradouro: "Rua dos Navegantes",
        localidade: "Vila de Porto de Galinhas",
        estado: "Ipojuca",
        uf: "PE",
      },
    ],
    localidadesBuscadas: [],
  };

  render() {
    const { localidades } = this.state;

    const LocalidadeCard = ({ cep, logradouro, localidade, estado, uf }) => (
      <div className="w-full p-1 mb-4 rounded-lg shadow-md">
        <Card className="w-full text-center border-2 border-black">
          <p className="text-xl">{cep}</p>
          <p>{logradouro}</p>
          <p>{localidade}</p>
          <p>{estado} - {uf}</p>
        </Card>
      </div>
    );

    return (
      <>
        {localidades.map((item) => (
          <LocalidadeCard
            cep={item.cep}
            logradouro={item.logradouro}
            localidade={item.localidade}
            estado={item.estado}
            uf={item.uf}
          />
        ))}
      </>
    );
  }
}

export default LocalidadeLista;