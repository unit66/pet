const ACTION_NAME = 'ACTION_NAME'

export function doSomething() {
  return function (dispatch) {
    dispatch({
      type: ACTION_NAME,
    })
  }
}

const initialState = {
  data: 'Home init store string',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, data: "Something else" }

    default:
      return state
  }
}
