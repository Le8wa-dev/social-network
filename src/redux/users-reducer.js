const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';



let initialState = {

    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false
};

    //     { id: 1, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Dmitriy', status: 'I wanna find friends', location: { city: 'Moscow', country: 'Russia' } },
    //     { id: 2, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Alex', status: 'I love traveling', location: { city: 'Kiev', country: 'Ukrain' } },
    //     { id: 3, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Elena', status: 'Just married', location: { city: 'S-Peterburg', country: 'Russia' } },
    //     { id: 4, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Andrew', status: 'Looking for job', location: { city: 'N.Novgorod', country: 'Russia' } },

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
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        default:

            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export default usersReducer;