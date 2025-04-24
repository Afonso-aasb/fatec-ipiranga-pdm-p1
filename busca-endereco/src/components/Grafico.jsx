import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grafico = ({ localidades }) => {
  if (localidades.length === 0) return null;

  const contagemPorUF = localidades.reduce((acc, loc) => {
    acc[loc.uf] = (acc[loc.uf] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(contagemPorUF);
  const values = Object.values(contagemPorUF);

  const data = {
    labels,
    datasets: [
      {
        label: "Quantidade por UF",
        data: values,
        backgroundColor: [
          "#f87171",
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#a78bfa",
          "#fb7185",
          "#38bdf8",
          "#4ade80",
          "#facc15",
          "#c084fc",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Distribuição por Estado (UF)
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Grafico;
