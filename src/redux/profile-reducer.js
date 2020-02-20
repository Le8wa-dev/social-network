import { usersApi, profileApi } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';


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

        case DELETE_POST: {

            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
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

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;