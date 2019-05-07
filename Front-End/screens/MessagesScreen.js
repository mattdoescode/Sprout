import React from "react";
import { AsyncStorage, ScrollView, StyleSheet, Text } from "react-native";
import { Users } from "../components/MockedDatabase";

export default class MessagesScreen extends React.Component {
  state = {
    matchedIds: []
  };
  static navigationOptions = {
    title: "Messages"
  };
  componentDidMount = () => {
    //this is so the component will update every time users swtch tabs
    this.props.navigation.addListener("willFocus", async playload => {
      try {
        const idString = await AsyncStorage.getItem("userLoggedIn");
        const user = Users[parseInt(idString, 10)];
        if (idString) {
          this.setState({
            matchedIds: user.matched
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  render() {
    const display = this.state.matchedIds ? (
      <Text style={{ textAlign: "center" }}>You haven't matched with anyone yet </Text>
    ):(
      <>
        <Text style={{ textAlign: "center" }}>People you matched with: </Text>
      </>
    );
    return (
      <ScrollView style={styles.container}>
    
        {display}    

        {this.state.matchedIds.map(id => {
          return (
            <Text style={{ textAlign: "center" }} key={id}>
              {Users[id].firstName + " " + Users[id].lastName}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#f4f4f4"
  }
});
