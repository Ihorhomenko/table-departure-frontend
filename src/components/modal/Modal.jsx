import Modal from 'react-modal'
import FormModal from 'components/form/form';
import "./modal.css"

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.8)'
  }
  
};

Modal.setAppElement('#modal');

const ModalWindow = ({modalIsOpen, closeModal, isUpdate, editTransaction}) => {

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='closeBtn' onClick={closeModal}>X</button>
        <div>
          <FormModal closeModal={closeModal} isUpdate={isUpdate} editTransaction={editTransaction}/>
        </div>
      </Modal>
  );
}

export default ModalWindow

