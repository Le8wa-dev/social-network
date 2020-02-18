import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css'
import { Input } from '../common/formsControls/FormsControls';
import { required } from './../../utils/validators/validators';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.row}>
                <Field name={'login'} placeholder={'Login'}
                validate={[required]}
                component={Input}/>
            </div>
            <div className={s.row}>
                <Field name={'password'} placeholder={'Password'}
                validate={[required]}
                component={Input}/>
            </div>
            <div className={s.row}>
                <label>
                    <Field type="checkbox" name={'rememberMe'} component={Input}/>
                    Remember me
                    </label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}



export default Login;