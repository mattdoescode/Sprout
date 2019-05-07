import React from "react";
import { AsyncStorage, StyleSheet, ScrollView, View } from "react-native";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import BioSection from "../components/ProfileScreen/BioSection";
import Name from "../components/ProfileScreen/Name";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Users } from "../components/MockedDatabase";

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e6e6e6",
  }
});

export default class ProfileScreen extends React.Component {
  state = {
    user: {
      firstName: "",
      iceBreaker: { question: "", answer1: "", answer2: "" },
      bio: ""
    }
  };

  static navigationOptions = {
    header: null
  };

  _signOut = () => {
    this.props.navigation.navigate("Auth");
  };

  //componentDidMount is run before the component mounts. It makes sense to fetch
  //the logged-in user information here.
  componentDidMount = () => {
    this.props.navigation.addListener("willFocus", async playload => {
      try {
        const idString = await AsyncStorage.getItem("userLoggedIn");
        const user = Users[parseInt(idString, 10)]; //parseInt(string, base) changes the string index back to int
        if (idString) {
          this.setState({
            user
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scollContainer}>
        <View keyboardShouldPersistTaps={"always"}>
          <Name />
          <BioSection user={this.state.user} editable={true} />
          <IceBreaker user={this.state.user} editable={true} />
          <SignOutButton signOutFunction={this._signOut} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
