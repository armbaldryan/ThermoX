import {
    fetchDataSuccess,
    fetchDataFailure,
    fetchDataInProgress
} from '../../actions' ;

export function createGetData({
    suffix,
    apiCall,
    apiCallArgs
}) {
    return () => (dispatch) => {
        const fullApiCall = apiCallArgs ? apiCallArgs.join('/')
            : '';
        const wholeApiCall = apiCallArgs
            ? `${apiCall}/${fullApiCall}`
            : apiCall;
        console.log('wholeApiCall :::', wholeApiCall);
         return fetch(wholeApiCall)
            .then(res => {
                dispatch(fetchDataInProgress(suffix));
                return res.json();
            })
            .then((data) => {
                dispatch(fetchDataSuccess(data, suffix));
                return data;
            })
            .catch((error) => {
                dispatch(fetchDataFailure(error, suffix))
            });
    };
}