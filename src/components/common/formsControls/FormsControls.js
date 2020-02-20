import React from 'react';
import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, child, ...Restprops } = props;
    return <FormControl {...props}><textarea {...input} {...Restprops} /></FormControl>

}

export const Input = (props) => {
    const { input, meta, child, ...Restprops } = props;
    return <FormControl {...props}><input {...input} {...Restprops} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props) => (
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props} />
)