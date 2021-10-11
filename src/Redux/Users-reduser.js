const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
       {id: 1, photoUrl: 'https://sun9-30.userapi.com/c58/u3798984/a_f4476d09.jpg',
       followed: true, fullName: 'Ilia', status: 'I am a boss', location: {sity: 'Sankt-Petersburg', country: 'Russian'}},
        {id: 2, photoUrl: 'https://sun9-57.userapi.com/c851236/v851236126/e82f5/WeEgy59ag7c.jpg',
         followed: false, fullName: 'Stepa', status: 'I am a friend of the boss', location: {sity: 'Moscow', country: 'Russian'}},
        {id: 3, photoUrl: 'https://sun9-23.userapi.com/c5269/u15718237/-6/x_c68bc5a1.jpg',
        followed: false, fullName: 'Den', status: 'I am a friend of the boss', location: {sity: 'Kiev', country: 'Ukraine'}}
    ]
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;

    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReduser;