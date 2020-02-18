import React from 'react';
import s from './FormsControls.module.css';

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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