import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Authenticate from '@components/Authenticate'
import Main from '@components/Main'

import reducers from '@reducers'


const logger = createLogger()
const middleware = [
  thunk,
  logger
]

const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

const RouterWithRedux = connect()(Router)

const scenes = Actions.create(
  <Scene key={'root'}>
    <Scene key={'authenticate'} component={Authenticate} title="Inicia sesión" />
    <Scene key={'main'} component={Main} title="Main" />
  </Scene>
)

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    )
  }
}

export default App