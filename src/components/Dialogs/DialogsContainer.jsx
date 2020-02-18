import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);