import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { SocialIcon, Grid, Row } from 'react-native-elements'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as userActions from '@actions/user'
import { Colors } from '@theme'

class Authenticate extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.token) {
      Actions.main({ type: 'reset' })
    }
  }


  onButtonPress() {
    this.props.attemptLogin()
  }

  render() {
    return (
      <Grid style={[ styles.container ]}>
        <Row size={1} style={{ alignItems: 'center' }}>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            style={{
              width: 300,
              height: 65
            }}
            onPress={this.onButtonPress.bind(this)} />
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brand.background
  }
})

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  routes: state.routes
})

// Any actions to map to the component?
const mapDispatchToProps = {
  attemptLogin: userActions.attemptLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate)