import React from 'react';
import s from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form';
import { TextArea } from './../common/formsControls/FormsControls';
import { required, maxLengthCreator } from './../../utils/validators/validators';

let maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={s.dialogs_form} onSubmit={props.handleSubmit}>
            <Field component={TextArea}
            validate={[required, maxLength]}
                name='newMessageBody' placeholder='Enter your message...' />
            <button >Send it</button>
        </form>
    )
}

export default reduxForm({ form: 'dialogaddMessageForm' })(AddMessageForm);