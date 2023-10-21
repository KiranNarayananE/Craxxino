import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

function RepaymentChart({ monthlyPayment, initialBalance }) {
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);

  console.log(monthlyPayment,'monthly payment')

  useEffect(() => {

    if (monthlyPayment) {
      const months = Math.ceil(initialBalance / monthlyPayment) + 1;
      let labels = Array.from({ length: months }, (_, index) => index);
      let datas = [];
  
      for (let index = 0; index < months; index++) {
        let monthlyBalance = initialBalance - monthlyPayment * index;
  
        if (monthlyBalance >= 0) {
          datas.push(monthlyBalance);
        } else {
          datas.push(0);
          break; 
        }
      }
      setChartLabels(labels);
      setChartData(datas);
    }
  }, [monthlyPayment, initialBalance]);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Balance of accounts after a number of months",
        data: chartData,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      { monthlyPayment ? <Line data={data} options={options} /> : <div className="mt-5 text-center"><span>Enter Monthly Payment....</span></div>}
    </div>
  );
}


export default RepaymentChart;
