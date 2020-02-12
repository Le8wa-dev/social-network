const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {

        profilePage: {
    
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 35 },
                { id: 2, message: 'It\'s my first post', likesCount: 12},
            ],
            
            newPostText: 'Enter post here'
        },
    
        dialogsPage: {
    
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
        },
    
        sidebar: {
    
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        if(action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT){

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if(action.type === ADD_MESSAGE) {

            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
                my: false
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {

            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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


export default store;
window.store = store;