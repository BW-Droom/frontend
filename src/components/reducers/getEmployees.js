import { FETCH_EMPLOYEE_START, FETCH_EMPLOYEE_PASS, FETCH_EMPLOYEE_FAIL } from '../actions/getEmployees';

const initialState = {
    id: null,
    name: null,
    email: null,
    occupation: null,
    expierence: null,
    dream_job: null
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
                name: action.payload.name,
                email: action.payload.email,
                occupation: action.payload.occupation,
                expierence: action.payload.expierence,
                dream_job: action.payload.dream_job
            }
        case FETCH_EMPLOYEE_FAIL:
            return {
                ...state,
                dog: action.payload,
            }
        default:
            return state
    }
}