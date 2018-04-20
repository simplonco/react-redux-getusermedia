const defaultState = {
  one : {}
}

const userReducer = (state=defaultState, action) => {

  switch (action.type) {
    case 'FETCH_USER':
      return state

    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        error: action.payload
      }

    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        one: action.payload.data.data
      }

    default:
      return state;
  }

  return state;
}

export default userReducer;