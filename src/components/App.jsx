import Table from "./Table/Table";
import AddBtn from "./AddBut/AddBtn";
import { useState, useEffect } from "react";
import ModalWindow from "./modal/Modal";
import { getTransactions } from "./services/api/api";

export const App = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactions().then(data => setTransactions(data))
  }, [])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="container"
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* Hello world */}
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      <Table transactions={transactions}/>
      <AddBtn openModal={openModal}/>
    </div>
  );
};

