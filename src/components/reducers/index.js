import {
    FETCH_JOBS_START,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    ADD_JOB_START,
    ADD_JOB_SUCCESS,
    ADD_JOB_FAILURE,
    EDIT_JOB_FAILURE,
    EDIT_JOB_START,
    EDIT_JOB_SUCCESS,
    DELETE_JOB_FAILURE,
    DELETE_JOB_START,
    DELETE_JOB_SUCCESS,
    FETCH_EMPLOYEE_START, 
    FETCH_EMPLOYEE_PASS, 
    FETCH_EMPLOYEE_FAIL
  } from "../actions/index";

  const initialState = {
    jobs: [],
    error: null,
    isFetchingJobs: false
  };

  export default function reducer(state = initialState, action){
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
      case FETCH_JOBS_START:
        return {
          ...state,
          isFetchingJobs: true
        };
      case FETCH_JOBS_SUCCESS:
        return {
          ...state,
          isFetchingJobs: false,
          jobs: action.payload,
          error: null
        };
      case FETCH_JOBS_FAILURE:
        return {
          ...state,
          isFetchingJobs: false,
          error: action.payload
        };
      case ADD_JOB_START:
        return {
          ...state,
          isFetchingJobs: true
        };
      case ADD_JOB_SUCCESS:
        return {
          ...state,
          isFetchingJobs: false,
          jobs: action.payload,
          error: null
        };
      case ADD_JOB_FAILURE:
        return {
          ...state,
          isFetchingJobs: false,
          error: action.payload
        };
      case EDIT_JOB_START:
        return {
            ...state,
            isFetchingJobs: true
        };
      case EDIT_JOB_SUCCESS:
        return {
            ...state,
            isFetchingJobs: false,
            jobs: action.payload,
            error: null
        };
      case EDIT_JOB_FAILURE:
        return {
            ...state,
            isFetchingJobs: false,
            error: action.payload
        }
        case DELETE_JOB_START:
        return {
            ...state,
            isFetchingJobs: true
        };
      case DELETE_JOB_SUCCESS:
      console.log('yay')
        return {
            ...state,
            isFetchingJobs: false,
            jobs: action.payload,
            error: null,
            onClick: window.location.reload()
        };
      case DELETE_JOB_FAILURE:
        return {
            ...state,
            isFetchingJobs: false,
            error: action.payload
        }
      default:
        return state;
    }
  };
  
  