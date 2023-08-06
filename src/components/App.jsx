import Table from "./Table/Table";
import AddBtn from "./AddBut/AddBtn";
import { useState, useEffect } from "react";
import ModalWindow from "./modal/Modal";
import { getTransactions } from "./services/api/api";

export const App = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isUpdate, setisUpdate] = useState(false)

  useEffect(() => {
    getTransactions().then(data => setTransactions(data))
  }, [transactions])

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setisUpdate(false);
  }

  const isUpDateTransaction = () => {
    setisUpdate(true)
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
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} isUpdate={isUpdate}/>
      <Table transactions={transactions} openModal={openModal} isUpDateTransaction={isUpDateTransaction}/>
      <AddBtn openModal={openModal}/>
    </div>
  );
};

