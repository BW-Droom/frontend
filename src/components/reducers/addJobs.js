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
    DELETE_JOB_SUCCESS
  } from "../actions/addJob";

  const initialState = {
    jobs: [],
    error: null,
    isFetchingJobs: false
  };

  const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
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
            error: null
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
  
  export default jobsReducer;