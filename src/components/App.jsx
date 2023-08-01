import Table from "./Table/Table";
import AddBtn from "./AddBut/AddBtn";
import { useState } from "react";
import ModalWindow from "./modal/Modal";

export const App = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container" id="container"
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
      <Table/>
      <AddBtn openModal={openModal}/>
    </div>
  );
};

