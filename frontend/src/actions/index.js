export const fetchDataInProgress = (suffix) => ({
    type: `REQUEST_${suffix}`
});

export const fetchDataSuccess = (data, suffix) => ({
    type: `RECEIVE_${suffix}`,
    payload: data
});

export const fetchDataFailure = (error, suffix) => ({
    type: `FAIL_${suffix}`,
    payload: { error }
});