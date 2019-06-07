const GET_STACK = 'GET_STACK'

export function getStack() {
  return function (dispatch) {
      const url = new URL('/api/stack', window.location.origin)
      const params = {
        method: 'GET',
      }
      const req = new Request(url.toString(), params)
      window.fetch(req)
        .then(data => data.json())
        .then((data) => {
            dispatch({
              type: GET_STACK,
              payload: data,
            })
        })
  }
}

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STACK:
      return [ ...action.payload ]

    default:
      return state
  }
}
