import Modal from 'react-modal'
import FormModal from 'components/form/form';
import "./modal.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#modal');

const ModalWindow = ({modalIsOpen, closeModal, isUpdate, editTransaction}) => {
//   let subtitle;
  

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

  return (
    <div id='container'>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='closeBtn' onClick={closeModal}>X</button>
        <div>
          <FormModal closeModal={closeModal} isUpdate={isUpdate} editTransaction={editTransaction}/>
                </div>
            </Modal>
        </div>
  );
}

export default ModalWindow

