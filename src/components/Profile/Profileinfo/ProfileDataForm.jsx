import React from 'react';
import s from './Profileinfo.module.css'
import { createField, Input, TextArea } from './../../common/formsControls/FormsControls';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form className={s.user_info} onSubmit={handleSubmit}>

        <p className={s.item}>
            <span>FullName: </span>
            {createField('FullName', 'fullName', [], Input)}
        </p>

        <p className={s.item}>
            <span>Looking for a job: </span>
            {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </p>

        <p className={s.item}>
            <span>Professional skills: </span>
            {createField('My Professional Skills', 'lookingForAJobDescription', [], TextArea)}
        </p>

        <p className={s.item}>
            <span>About me: </span>
            {createField('About me', 'aboutMe', [], TextArea)}
        </p>

        <div className={s.contactsInner}>
            <b>Contacts: </b>
            {Object.keys(profile.contacts).map(key => {
                return <p key={key} className={s.item + ' ' + s.contact}>
                    <span>{key}: </span>
                    {createField(key, 'contacts.' + key, [], Input)}
                </p>
            })}
        </div>

        {error && <div className={s.formSummaryError}>
            {error}
        </div>}

        <button className={s.user_info_btn}>Save</button>
    </form>
}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileDataForm)


export default ProfileDataFormRedux;