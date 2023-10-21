
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddAccount from "./components/addAccount/AddAccount";
import RepaymentModel from "./components/repayment_model/RepaymentModel";
import "./App.css";

function App() {

  const { accounts, count } = useSelector((state) => state.accountReducer);

  return (
    <>
      <Routes>
        <Route path="/" element={<AddAccount accounts={accounts} count={count} />}/>
        <Route path="/repayment-calculation" element={<RepaymentModel />} />
      </Routes>
    </>
  );
}

export default App;
