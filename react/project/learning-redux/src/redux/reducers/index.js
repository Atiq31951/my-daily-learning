const initialState = {
  age: 21
}

const myReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log('action: ', action);
  const newState = {...state}
  if (type === 'ADD') {
    newState.age += payload
  }
  if (type === 'SUB') {
    newState.age -= payload
  }
  return newState
}

export default myReducer