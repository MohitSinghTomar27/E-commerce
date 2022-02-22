
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})


//user-> the key that represent the individual slices of state, i.e the
// actual reducers, is the actual individual reducer that we'hv wrote