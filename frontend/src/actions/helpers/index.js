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
        const wholeApiCall = apiCallArgs
            ? `${apiCall}/${apiCallArgs}`
            : apiCall;
         return fetch(wholeApiCall)
            .then(res => {
                dispatch(fetchDataInProgress(suffix));
                return res.json();
            })
            .then((data) => {
                console.log('data :::', data);
                dispatch(fetchDataSuccess(data, suffix));
                return data;
            })
            .catch((error) => {
                console.log('error :::', error);
                dispatch(fetchDataFailure(error, suffix))
            });
    };
}