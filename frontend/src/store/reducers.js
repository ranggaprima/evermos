import { combineReducers } from 'redux';
import axios from 'axios'

const GET_MOVIE_LOADING = 'GET_MOVIE_LOADING';
const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

export function getMovieLoading(bool) {
  return {
    type: GET_MOVIE_LOADING,
    loading: bool
  };
}

export function getMovieSuccess(movieData) {
  return {
    type: GET_MOVIE_SUCCESS,
    movieData
  };
}

export function getMovieError(bool) {
  return {
    type: GET_MOVIE_ERROR,
    error: bool
  };
}

export function getMovie(url) {
  const api_path = `/api/getMovie`

  return (dispatch) => {
    dispatch(getMovieLoading(true));
    axios.post(api_path)
    .then(res => {
      return res;
    })
    .then((data) => {
      dispatch(getMovieSuccess(data.data))
      dispatch(getMovieLoading(false));
    })
    .catch(() => dispatch(getMovieError(true)));
  };
}

export function error(state = false, action) {
  console.log(state, action)
  switch (action.type) {
    case GET_MOVIE_ERROR:
      return action.error;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case GET_MOVIE_LOADING:
      return action.loading;
    default:
      return state;
  }
}

export function movieData(state = [], action) {
  console.log(state, action)
  switch (action.type) {
    case GET_MOVIE_SUCCESS:
      return action.movieData;
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  movieData,
  error,
});
