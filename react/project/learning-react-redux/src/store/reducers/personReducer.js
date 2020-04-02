const personReducer = (state, {type, payload}) => {
  if (type === 'SET_PERSON') {
    return {
      ...state,
      person: payload
    }
  }
  return state
}

export default personReducer