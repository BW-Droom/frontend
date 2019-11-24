import { FETCH_EMPLOYEE_START, 
         FETCH_EMPLOYEE_PASS, 
         FETCH_EMPLOYEE_FAIL 
        } from '../actions/getEmployees';

const initialState = {
    employees: [],
    error: ''
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_START:
            return {
                ...state
            }
        case FETCH_EMPLOYEE_PASS:
            return {
                ...state,
                employees: action.payload
            }
        case FETCH_EMPLOYEE_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}