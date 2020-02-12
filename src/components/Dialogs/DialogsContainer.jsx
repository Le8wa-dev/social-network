import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onAddMessage = () => {
                let action = addMessageActionCreator();
                store.dispatch(action);
            }

            let onMessageChange = (text) => {
                let action = updateNewMessageTextActionCreator(text)
                store.dispatch(action);
            }
            return <Dialogs dialogsPage={store.getState().dialogsPage}
                updateNewMessageText={onMessageChange}
                addMessage={onAddMessage} />;
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;