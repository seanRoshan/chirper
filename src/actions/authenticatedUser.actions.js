export const AUTHENTICATED_USER_ACTION_TYPES = {
    SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER"
};

export function setAuthenticatedUser(id) {
    return {
        type: AUTHENTICATED_USER_ACTION_TYPES.SET_AUTHENTICATED_USER,
        id
    }
}
