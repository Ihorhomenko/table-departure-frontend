import { Formik, Field, Form} from 'formik';
import "./loginPage.css"

const LoginPage = () => {
    return(
    <div className='loginPageContainer'>
        <Formik
      initialValues={{
        nikNAme: '',
        password: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='formLogin'>
        <label htmlFor="nikName">Введіть свій нікнейм</label>
        <Field className="inputlogin" id="nikNAme" name="nikNAme" placeholder="Slyapa" />

        <label htmlFor="password">Введіть пароль</label>
        <Field className="inputlogin" id="password" name="password" placeholder="" />

        <button className='btnLogin' type="submit">Увійти</button>
      </Form>
    </Formik>
    </div>
    
    )
}

export default LoginPage