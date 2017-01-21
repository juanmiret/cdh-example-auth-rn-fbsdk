import { LoginManager, AccessToken } from 'react-native-fbsdk'

export const attemptLogin = () => {
  return (dispatch) => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions([ 'public_profile', 'email' ])
      .then(() => {
        AccessToken.getCurrentAccessToken()
          .then((data) => {
            dispatch({
              type: 'USER_ATTEMPT_LOGIN',
              payload: data.accessToken.toString()
            })
          })
      })
      .catch((err) => {
        dispatch({
          type: 'USER_ATTEMPT_LOGIN_ERROR',
          payload: err
        })
      })
  }
}
