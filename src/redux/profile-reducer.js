import { usersApi, profileApi } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {

    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 35 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 },
    ],
    profile: null,
    status: ''
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
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCount: 0 }]
            }
        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }

        default:

            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
}


export default profileReducer;