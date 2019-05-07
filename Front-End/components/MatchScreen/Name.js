import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from "react-native";
const styles = StyleSheet.create({
  container:{
      fontSize: 28,
      opacity: 0.9,
      paddingTop: 15,
      paddingLeft: 20,
  }
});

class Name extends Component {

  render() {

    return (
      <View >
        <Text style={styles.container}>
          {this.props.user.firstName}
        </Text>
      </View>
    );
  }
}

export default Name;
