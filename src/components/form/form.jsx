import { Formik, Field, Form,  ErrorMessage} from 'formik';
import { addTransactions } from 'components/services/api/api';
import "./form.css"


const FormModal = ({isUpdate, closeModal, editTransaction}) => {

    const initialValues = editTransaction ? {
        typeProduct: editTransaction.typeProduct,
        product: editTransaction.product,
        quantity: editTransaction.quantity,
        name: editTransaction.name,
        telNumber: editTransaction.telNumber,
        town: editTransaction.town,
        post: editTransaction.post,
        price: editTransaction.price,
        payment: editTransaction.payment,
        cost: editTransaction.cost
    }
    :{
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
    }
    
    const validate = (values) => {
        const errors = {};
    
        if (!values.typeProduct) {
          errors.typeProduct = 'Введіть тип товару';
        }
        if (!values.product) {
            errors.product = 'Введіть найменування товару';
        }
        if (!values.quantity) {
            errors.quantity = 'Введіть кількість';
        }
        if (!values.name) {
            errors.name = 'Введіть ПІБ замовника';
        }
        if (!values.telNumbert) {
            errors.telNumber = 'Введіть номер телефону замовника';
        }
        if (!values.town) {
            errors.town = 'Введіть місто отримувача';
        }
        if (!values.post) {
            errors.post = 'Введіть відділення пошти';
        }
        if (!values.price) {
            errors.price = 'Введіть ціну товару';
        }
        if (!values.payment) {
            errors.payment = 'Введіть суму оплати товару';
        }
        if (!values.cost) {
            errors.cost = 'Введіть собівартість товару';
        }
              
        return errors;
      }

return (
    <>
    
    <Formik
    initialValues={initialValues}

    validate={validate}
    

    onSubmit={(values) => {
        addTransactions(values)

        closeModal()
    }}

    // onClickUpdate = {(values) => {
    //     console.log(values)
    // }}
    >
    <Form className='form'>
        <label htmlFor="typeProduct">Тип товару</label>
        <Field className='input' id="typeProduct" name="typeProduct" placeholder="Каблучка" />
        <ErrorMessage name="typeProduct" component="p" className='error-massge' />

        <label htmlFor="product">Найменування товару</label>
        <Field className='input' id="product" name="product" placeholder="Золоте серце + перлина" />
        <ErrorMessage name="product" component="p" className='error-massge'/>

        <label htmlFor="quantity">Кількість</label>
        <Field className='input' id="quantity" name="quantity" placeholder="1"/>
        <ErrorMessage name="quantity" component="p" className='error-massge'/>
        
        <label htmlFor="name">ПІБ отримувача</label>
        <Field className='input' id="name" name="name" placeholder="Ігор Хоменко"/>
        <ErrorMessage name="name" component="p" className='error-massge'/>
        
        <label htmlFor="telNumber">Номер телефону</label>
        <Field className='input' id="telNumber" name="telNumber" placeholder="0631234563"/>
        <ErrorMessage name="telNumber" component="p" className='error-massge'/>
        
        <label htmlFor="town">Місто отримувача</label>
        <Field className='input' id="town" name="town" placeholder="Київ"/>
        <ErrorMessage name="town" component="p" className='error-massge'/>
        
        <label htmlFor="post">Відділення НП</label>
        <Field className='input' id="post" name="post" placeholder="Відділення 24"/>
        <ErrorMessage name="post" component="p" className='error-massge'/>
        
        <label htmlFor="price">Ціна</label>
        <Field className='input' id="price" name="price" placeholder="250"/>
        <ErrorMessage name="price" component="p" className='error-massge'/>
                
        <label htmlFor="payment">Оплачено</label>
        <Field className='input' id="payment" name="payment" placeholder="250"/>
        <ErrorMessage name="payment" component="p" className='error-massge'/>
        
        <label htmlFor="cost">Собівартість</label>
        <Field className='input' id="cost" name="cost" placeholder="120"/>
        <ErrorMessage name="cost" component="p" className='error-massge'/>
        
        {isUpdate ? <button type='button'>Зберегти</button> : <button  type="submit">Відправити</button>}
    </Form>
    </Formik>
    </>
    
)
}

export default FormModal
