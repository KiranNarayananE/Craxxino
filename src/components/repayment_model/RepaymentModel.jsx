import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import RepaymentChart from "./repaymentChart";

Chart.register(CategoryScale);

function RepaymentModel() {
  const { accounts} = useSelector((state) => state.accountReducer);
  console.log(accounts)
  const monthlyPayment = useRef();

  const initialBalance = accounts.reduce((acc,curr)=>{
    acc+=Number(curr.balance)
    return acc
  },0);

  const [timerId, setTimerId] = useState(null);
  const [showGraph, setShowGraph] = useState(false);

  const showRepaymentModel = ()=>{
    setShowGraph(false);
    clearTimeout(timerId);
    const newTimerId = setTimeout(() => {
        setShowGraph(true);
    }, 800);
    setTimerId(newTimerId);
  }

  return (
    <div className="md:w-1/2 w-full h-96 m-auto md:p-10 p-5">
      <div className="flex justify-start text-2xl font-semibold">
        <span>Initial Balance : {initialBalance}</span>
      </div>
      
      <div className="mt-5 pt-3 border-t-4 border-slate-300">
        <label>Monthly Payment</label>
        <input
          type="number"
          placeholder="Enter Monthly Payment..."
          className="w-10/12 h-10 p-2 outline-none mt-2"
          ref={monthlyPayment}
          onChange={showRepaymentModel}
        />
      </div>
      {showGraph ? <RepaymentChart monthlyPayment={monthlyPayment ? monthlyPayment.current.value : 1} initialBalance={initialBalance} /> : <div className="mt-5 text-center"><span>Enter monthly payment</span></div> }
    </div>
  );
}

export default RepaymentModel;
