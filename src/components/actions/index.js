import api from '../../utils/api'

export const FETCH_JOBS_START = "FETCH_JOBS_START";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const ADD_JOB_START = "ADD_JOB_START";
export const ADD_JOB_SUCCESS = "ADD_JOB_SUCCESS";
export const ADD_JOB_FAILURE = "ADD_JOB_FAILURE";
export const EDIT_JOB_START = "EDIT_JOB_START";
export const EDIT_JOB_SUCCESS = "EDIT_JOB_SUCCESS";
export const EDIT_JOB_FAILURE = "EDIT_JOB_FAILURE";
export const DELETE_JOB_START = 'DELETE_JOB_START';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';
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


export const getJobs = (id) => dispatch => {
    dispatch({ type: FETCH_JOBS_START });
    api()
      .get(`/api/company/3/jobs`)
      .then(response => {
        console.log(response);
        dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: FETCH_JOBS_FAILURE, payload: err }));
  };

  export const addJob = job => dispatch => {
    dispatch({ type: ADD_JOB_START });
    api()
      .post("/api/company/3/jobs", job)
      .then(response => {
        console.log(response);
        dispatch({ type: ADD_JOB_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: ADD_JOB_FAILURE, payload: err }));
  };
  
  export const editJob = (id, job) => dispatch => {
    dispatch({ type: EDIT_JOB_START });
    api()
      .put(`/api/company/3/jobs/${id}`, job)
      .then(response => {
        dispatch({ type: EDIT_JOB_SUCCESS, payload: response.data })
    })
      .catch(err => dispatch({ type: EDIT_JOB_FAILURE, payload: err }))
  }
  
  export const deleteJob = (id) => dispatch => {
    dispatch({ type: DELETE_JOB_START });
    api()
      .delete(`/api/company/3/jobs/${id}`)
      .then(response => {
        dispatch({ type: DELETE_JOB_SUCCESS, payload: response.data })
    })
      .catch(err => dispatch({ type: DELETE_JOB_FAILURE, payload: err }))
  }