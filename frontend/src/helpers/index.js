export const needsToFetch = (item) => {
    if (!item) {
        return true;
    }
    const itemToCheck = typeof item.status === 'number' ? item.status : item;
    return itemToCheck === 0 || itemToCheck === 1;
};

export const beginPrefix = 'REQUEST_';
export const receivePrefix = 'RECEIVE_';
export const failPrefix = 'FAIL_';
export const addPrefix = 'ADD_';

export function createGetReducer(
    suffix
){
    return (
        state = { status: 0, payload: [] },
        action
) => {
    switch (action.type) {
        case (beginPrefix + suffix):
            return {
                ...state,
                status: 1,
            };
        case (receivePrefix + suffix):
            return {
                ...state,
                payload: action.payload,
                status: 2,
            };
        case (failPrefix + suffix):
            return {
                ...state,
                status: 3,
                error: action.error,
            };
        case (addPrefix + suffix):
            return {
                ...state,
                payload: [ ...state.payload, action.payload ],
                status: 2,
            };
        default:
            return state;
    }
};
}