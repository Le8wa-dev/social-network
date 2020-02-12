import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {store => {
//             let onAddMessage = () => {
//                 let action = addMessageActionCreator();
//                 store.dispatch(action);
//             }

//             let onMessageChange = (text) => {
//                 let action = updateNewMessageTextActionCreator(text)
//                 store.dispatch(action);
//             }
//             return <Dialogs dialogsPage={store.getState().dialogsPage}
//                 updateNewMessageText={onMessageChange}
//                 addMessage={onAddMessage} />;
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;