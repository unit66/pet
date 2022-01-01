import Axios from 'axios';
import * as tree from '../../../public/songs/dataTree.json'

const GET_SONGS = 'GET_SONGS';
const DELETE_SONG = 'DELETE_SONG';
const ADD_SONG = 'ADD_SONG';
const PENDING_START = 'PENDING_START';
const PENDING_FINISHED = 'PENDING_FINISHED';
const API_URL = process.env.API_URL;

export const getDataTree = () => {
  return dispatch => {
    dispatch({
      type: 'PENDING_START',
    });
    const params = {
      url: `${API_URL}/api/`,
      method: 'get',
      validateStatus: (status) => {
        return true;
        },
    };

    Axios(params)
        .then(response => {
          dispatch({
            type: 'GET_SONGS',
            payload: response.data
          });
          dispatch({
            type: 'PENDING_FINISHED',
          });
          })
        .catch(e => {
          console.log(e);
        });
      // dispatch({
      //     type: 'GET_SONGS',
      //     payload: tree.default
      // });
  }
};

export const addSong = (song) => {
  return dispatch => {
    dispatch({
      type: 'PENDING_START',
    });
    const params = {
      url: `${API_URL}/api/`,
      method: 'post',
      data: {
        source: song.source,
        author: song.author,
        song: song.song,
        offset: song.offset
      },
      validateStatus: (status) => {
        return true;
      },
    };

    Axios(params)
        .then(response => {
          dispatch({
            type: 'ADD_SONG',
            payload: response.data
          });
          dispatch({
            type: 'PENDING_FINISHED',
          });
        })
        .catch(e => {
          console.log(e);
        });
  }
};

export const deleteSong = (song) => {
  return dispatch => {
    dispatch({
      type: 'PENDING_START',
    });
    const params = {
      url: `${API_URL}/api/${song.author}/${song.song}/`,
      method: 'post',
      validateStatus: (status) => {
        return true;
      },
    };

    Axios(params)
        .then(response => {
          dispatch({
            type: 'DELETE_SONG',
            payload: response.data
          });
          dispatch({
            type: 'PENDING_FINISHED',
          });
        })
        .catch(e => {
          console.log(e);
        });
  }
};

const initialState = {
  dataTree: [],
  pending: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return { ...state, dataTree: action.payload };

    case DELETE_SONG:
      return { ...state, dataTree: action.payload };

    case ADD_SONG:
      return { ...state, dataTree: action.payload };

    case PENDING_START:
      return { ...state, pending: true };

    case PENDING_FINISHED:
      return { ...state, pending: false };

    default:
      return state
  }
}
