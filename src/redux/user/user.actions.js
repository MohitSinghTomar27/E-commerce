import {UserActionTypes} from './user.types'
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});


// connect is a higher order component that lets us modify our component to have access to thing relader