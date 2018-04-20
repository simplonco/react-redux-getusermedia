

const defaultState = {
  one : {}
}

const userReducer = (state=defaultState, action) => {

  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        one : action.payload 
      }

    default:
      return state;
  }

  return state;
}

export default userReducer;