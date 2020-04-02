import {createStore, combineReducers} from 'redux'
import companyReducer from './reducers/companyReducer'
import generelReducer from './reducers/generelReducer'
import personReducer from './reducers/personReducer'

const defaultStore = {
  person: null,
  companies: [],
  token: null
}

const CombinedReducer = combineReducers(
  {
    generel: generelReducer,
    person: personReducer,
    company: companyReducer
  }
)
const store = createStore(CombinedReducer, defaultStore)


store.dispatch({
  type: "SET_PERSON",
  payload: {
    name: "Atiqur Rahman",
    user_id: 19425,
    country_id: 17,
    location_id: 794,
    area_id: 94375,
    contact_information: {
      phone: [
        {
          number: '01771765449',
          is_primary: true
        },
        {
          number: '07942910605',
          is_primary: false
        }
      ],
      email: [
        {
          id: 'atiqur.rahman951@gmail.com',
          is_primary: true
        },
        {
          id: 'atiqur.rahman31951@gmail.com',
          is_primary: false
        }
      ]
    }
  }
})

store.dispatch({
  type: "SET_COMPANIES",
  payload: [
    {
      id: 1785,
      name: "SEB Arb LTd"
    },
    {
      id: 17841,
      name: "Widespace AB"
    }
  ]
})


console.log('Store ==> ', store.getState())

export default store