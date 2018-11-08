import {
    fetchDataSuccess,
    fetchDataFailure,
    fetchDataInProgress
} from '../../actions' ;

export function createGetData({
    suffix,
    apiCall,
}) {
    return () => (dispatch) => {
        fetch(apiCall)
            .then(res => {
                dispatch(fetchDataInProgress(suffix));
                return res.json();
            })
            .then((data) => {
                dispatch(fetchDataSuccess(data, suffix));
                return data;
            })
            .catch(error => dispatch(fetchDataFailure(error, suffix)));
    };
}