import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css'
import { Input } from '../common/formsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { createField } from './../common/formsControls/FormsControls';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.row}>
                {createField('Email', 'email', [required], Input)}
            </div>
            <div className={s.row}>
                {createField('Password', 'password', [required], Input, { type: 'password' })}
            </div>
            <div className={s.row}>
                <label>
                    {createField(null, 'rememberMe', [], Input, { type: 'checkbox' })}
                    Remember me
                    </label>
            </div>

            {captchaUrl && <img src={captchaUrl} />}

            <div className={s.row}>
                {captchaUrl && createField('Symbolsfrom image', 'captcha', [required], Input, {})}
            </div>

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);