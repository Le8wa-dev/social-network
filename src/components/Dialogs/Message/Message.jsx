import React from 'react';
import s from './../Dialogs.module.css'


const Message = (props) => {
    let messageClass = `${s.message} ${props.userClass}`;

    return (
        <div className={messageClass}>
            <img src="https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg" alt="" className={s.message_logo} />
            <p className={s.message_text}>{props.message}</p>
        </div>
    );
}


export default Message;