import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import {Image, StyleSheet} from 'react-native';

import TabBarIcon from "../components/TabBarIcon";
import MatchScreen from "../screens/MatchScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const MatchStack = createStackNavigator({
  Match: MatchScreen
});

MatchStack.navigationOptions = {
  tabBarLabel: "Match",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen
});

MessagesStack.navigationOptions = {
  tabBarLabel: "Messages",
  // headerBackground: (
  //   <Image
  //    style={StyleSheet.absoluteFill}
  //     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
  //   />
  // ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const tabNavigatorConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: "gray",
      height: 70
    },
    labelStyle: {
      marginTop: 30
    }
  }
};

export default createMaterialTopTabNavigator(
  {
    ProfileStack,
    MatchStack,
    MessagesStack
  },
  tabNavigatorConfig
);
