const companyReducer = (state, {type, payload}) => {
  if (type === 'SET_COMPANIES') {
    return {
      ...state,
      companies: payload
    }
  }
  return state
}

export default companyReducer