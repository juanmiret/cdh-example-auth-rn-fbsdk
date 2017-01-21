import { combineReducers } from 'redux'

import user from './user'
import routes from './routes'

const reducers = combineReducers({
  user,
  routes
})

export default reducers