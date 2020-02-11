
let rerenderEntireTree;

let state = {

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
        ]
    },

    sidebar: {

    }
}


export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;