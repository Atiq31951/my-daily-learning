const generelReducer = (state, {type, payload}) => {
  if (type === 'SET_TOKEN') {
    return {
      ...state,
      token: payload
    }
  }
  return state
}

export default generelReducer