import { usersApi, profileApi } from './../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';


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

        case SAVE_PHOTO_SUCCESS: {

            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
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

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        // dispatch(stopSubmit('edit-profile', { 'contacts': { 'facebook': response.data.messages[0]} }));
        return Promise.reject(response.data.messages[0] );
    }
}


export default profileReducer;