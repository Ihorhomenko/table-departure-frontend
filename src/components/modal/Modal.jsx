import Modal from 'react-modal'
import { Formik, Field, Form } from 'formik';
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

Modal.setAppElement('#container');

const ModalWindow = ({modalIsOpen, closeModal}) => {
//   let subtitle;
  

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='closeBtn' onClick={closeModal}>X</button>
        <div>
            <Formik
            initialValues={{
                typeProduct: '',
                product: '',
                quantity: '',
                name: '',
                telNumber: '',
                town: '',
                post: '',
                price: '',
                payment: '',
                cost: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                closeModal()
            }}
            >
            <Form>
                <label htmlFor="typeProduct">Тип товару</label>
                <Field className='input' id="typeProduct" name="typeProduct" placeholder="Каблучка" />

                <label htmlFor="product">Найменування товару</label>
                <Field className='input' id="product" name="product" placeholder="Золоте серце + перлина" />

                <label htmlFor="quantity">Кількість</label>
                <Field className='input' id="quantity" name="quantity" placeholder="1"/>
                
                <label htmlFor="name">ПІБ отримувача</label>
                <Field className='input' id="name" name="name" placeholder="Ігор Хоменко"/>

                <label htmlFor="telNumber">Номер телефону</label>
                <Field className='input' id="telNumber" name="telNumber" placeholder="0631234563"/>

                <label htmlFor="town">Місто отримувача</label>
                <Field className='input' id="town" name="town" placeholder="Київ"/>

                <label htmlFor="post">Відділення НП</label>
                <Field className='input' id="post" name="post" placeholder="Відділення 24"/>

                <label htmlFor="price">Ціна</label>
                <Field className='input' id="price" name="price" placeholder="250"/>
                
                <label htmlFor="payment">Оплачено</label>
                <Field className='input' id="payment" name="payment" placeholder="250"/>

                <label htmlFor="cost">Собівартість</label>
                <Field className='input' id="cost" name="cost" placeholder="120"/>

                <button  type="submit">Submit</button>
            </Form>
            </Formik>
                </div>
            </Modal>
        </div>
  );
}

export default ModalWindow

