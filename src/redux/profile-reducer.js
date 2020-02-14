const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {

    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 35 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 },
    ],
    newPostText: 'Enter post here',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }

        case ADD_POST: {

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
            }
        }

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:

            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;