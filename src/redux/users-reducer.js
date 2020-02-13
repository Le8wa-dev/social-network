const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';



let initialState = {

    users: [
    //     { id: 1, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Dmitriy', status: 'I wanna find friends', location: { city: 'Moscow', country: 'Russia' } },
    //     { id: 2, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Alex', status: 'I love traveling', location: { city: 'Kiev', country: 'Ukrain' } },
    //     { id: 3, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Elena', status: 'Just married', location: { city: 'S-Peterburg', country: 'Russia' } },
    //     { id: 4, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Andrew', status: 'Looking for job', location: { city: 'N.Novgorod', country: 'Russia' } },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:

            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;