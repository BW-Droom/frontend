import api from "../../../utils/api";

export const FETCH_EMPLOYEE_START = "FETCH_EMPLOYEE_START"
export const FETCH_EMPLOYEE_PASS = "FETCH_EMPLOYEE_PASS"
export const FETCH_EMPLOYEE_FAIL = "FETCH_EMPLOYEE_FAIL"

export function fetchEmployee() {
    return dispatch => {
        dispatch({ type: FETCH_EMPLOYEE_START });

        api()
            .get(`/api/seeker`)
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_EMPLOYEE_PASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_EMPLOYEE_FAIL, payload: err });
            })
    }
}