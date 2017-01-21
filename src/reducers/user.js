const initialState = {
  token: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ATTEMPT_LOGIN':
      return { ...state, token: action.payload }

    default:
      return state
  }
}
