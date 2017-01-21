import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

class Main extends Component {

  componentWillMount() {
    console.log(this.props.user)
  }

  render() {
    return (
      <View>
        <Text>Hey!</Text>
      </View>
    )
  }
}

const MapStateToProps = state => ({
  user: state.user
})

export default connect(MapStateToProps, null)(Main)