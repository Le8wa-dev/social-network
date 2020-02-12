import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dailogs.map( d => {
        return <DialogItem name={d.name} id={d.id} />
    });

    let messagesElements = props.dialogsPage.messages.map ( m => {
        return <Message message={m.message} userClass={m.my ? s.user : ''} />
    });

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <h2 className={s.title}>Dialogs</h2>
            <div className={s.dialogs_inner}>
                <div className={s.items}>

                    { dialogsElements }

                </div>

                <div className={s.messages}>

                    { messagesElements }

                </div>
            </div>

            <div className={s.dialogs_form}>
                <textarea  onChange={onMessageChange} ref={newMessageElement}   value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={onAddMessage} >Send it</button>
            </div>
        </div>
    );
}

export default Dialogs;