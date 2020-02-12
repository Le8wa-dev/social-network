import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


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
    
        navbar: {
    
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;