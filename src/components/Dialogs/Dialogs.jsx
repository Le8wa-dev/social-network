import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

import AddMessageForm from './addMessageForm'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dailogs.map(d => {
        return <DialogItem name={d.name} key={d.id} id={d.id} />
    });

    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} key={m.id} userClass={m.my ? s.user : ''} />
    });

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <h2 className={s.title}>Dialogs</h2>
            <div className={s.dialogs_inner}>
                <div className={s.items}>

                    {dialogsElements}

                </div>

                <div className={s.messages}>

                    {messagesElements}

                </div>
            </div>

            <AddMessageForm onSubmit={addNewMessage}/>

        </div>
    );
}

export default Dialogs;