const initialState = {
    payload: [],
    status: 0,
};

export default function singleProductReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS_BY_SLUG_BEGIN':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                status: 0,
            };
        case 'FETCH_PRODUCTS_BY_SLUG_IN_PROGRESS':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                status: 1,
            };
        case 'FETCH_PRODUCTS_BY_SLUG_SUCCESS':
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                status: 2,
                payload: action.payload
            };

        case 'FETCH_PRODUCTS_BY_SLUG_FAILURE':
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                status: 3,
                error: action.error
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}