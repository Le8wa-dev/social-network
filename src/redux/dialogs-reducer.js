const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dailogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Elena' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Viky' },
        { id: 6, name: 'Fedor' }
    ],

    messages: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'What about party tonight?', my: true },
        { id: 3, message: 'My girlfriend is angry, I am stay at home' },
        { id: 4, message: 'Ok, see you next week, doode!', my: true },
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body, my: true}]
            };
        }
        default:

            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;