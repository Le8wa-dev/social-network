const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {

    dailogs: [ 
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Viky'},
        {id: 6, name: 'Fedor'}
    ],

    messages: [ 
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'What about party tonight?', my: true},
        {id: 3, message: 'My girlfrand is angry, I am stay at home'},
        {id: 4, message: 'Ok, see you next week, doode!', my: true},
    ],

    newMessageText: 'Enter post here'
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 5,
                message: state.newMessageText,
                my: true
            };
    
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:

            state.newMessageText = action.newText;
            return state;
        
        default: 
            
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;