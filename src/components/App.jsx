// import AppBar from "./appBar/appBar";
// import Table from "./Table/Table";
// import AddBtn from "./AddBut/AddBtn";
// import { useState, useEffect } from "react";
// import ModalWindow from "./modal/Modal";
// import { getTransactions } from "./services/api/api";
import LoginPage from "pages/loginPage/loginPage";

export const App = () => {

  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [transactions, setTransactions] = useState([]);
  // const [isUpdate, setisUpdate] = useState(false)
  // const [editTransaction, setEditTransaction] = useState(null)

  // useEffect(() => {
  //   getTransactions().then(data => setTransactions(data))
  // }, [transactions])


  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setisUpdate(false);
  //   setEditTransaction(null)
  // }

  // const isUpDateTransaction = () => {
  //   setisUpdate(true)
  // }

  // const addEditTransaction = (data) => {
  //   setEditTransaction(data)
  // }



  return (
    <>
    <LoginPage/>
    {/* <AppBar/>
    <div className="container">
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} isUpdate={isUpdate} editTransaction={editTransaction}/>
      <Table transactions={transactions} openModal={openModal} isUpDateTransaction={isUpDateTransaction} addEditTransaction={addEditTransaction}/>
      <AddBtn openModal={openModal}/>
    </div> */}
    </>
    
  );
};

