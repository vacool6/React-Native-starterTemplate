import React from "react";
import { Text, View } from "react-native";
//
import classes from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <Text style={classes.heading}>Welcome to the app</Text>
    </View>
  );
};

export default Welcome;
