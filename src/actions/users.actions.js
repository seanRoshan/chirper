export const USERS_ACTION_TYPES = {
    RECEIVE_USERS: 'RECEIVE_USERS'

};

export function receiveUsers(users) {
    return {
        type: USERS_ACTION_TYPES.RECEIVE_USERS,
        users
    }
}
