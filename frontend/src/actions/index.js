export const fetchDataInProgress = (suffix) => ({
    type: `FETCH_${suffix}_IN_PROGRESS`
});

export const fetchDataSuccess = (data, suffix) => ({
    type: `FETCH_${suffix}_SUCCESS`,
    payload: data
});

export const fetchDataFailure = (error, suffix) => ({
    type: `FETCH_${suffix}_FAILURE`,
    payload: { error }
});