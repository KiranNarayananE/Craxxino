import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../../redux/slices/account";
import { useNavigate } from "react-router-dom";

function AddAccount({ accounts, count }) {

  const balance = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewAccount = () => {
    dispatch(addAccount({ balance: balance.current.value }));
    balance.current.value = "";
    balance.current.focus();
  };


  return (
    <div className="flex w-full md:mt-32 justify-center items-center">
      <div className="md:w-1/2 w-full h-9 m-auto md:p-10 p-5">
        <h1 className="text-center font-semibold text-4xl ">Accounts</h1>
        <div className="mt-2 text-end text-xl">
          Count : {count.toString().padStart(2, 0)}
        </div>
        <div className="flex flex-wrap mt-5">
          <label htmlFor="" className="text-2xl mb-2 w-full">
            Balance
          </label>
          <input
            type="number"
            placeholder="Enter balance..."
            className="w-10/12 h-10 p-2 outline-none"
            ref={balance}
            onKeyUp={(e) => {
              e.key === "Enter" && addNewAccount();
            }}
          />
          <span
            className="w-2/12 h-10 p-2 bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-sm text-white text-center"
            onClick={addNewAccount}
          >
            Add
          </span>
        </div>
        <div className="flex flex-wrap m-5">
          <ul>
            {accounts?.length > 0 ? (
              accounts.map((acc, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => navigate('/repayment-calculation')}
                    className="cursor-pointer hover:bg-white p-1 px-1 rounded-lg"
                  >
                    <span>balance: {acc.balance}</span>
                  </li>
                )
              })
            ) : (
              <li>
                <span className="text-3xl font-bold">No Accounts !</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
