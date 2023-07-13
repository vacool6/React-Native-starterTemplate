import React, { useState } from "react";
import { Text, ActivityIndicator, View, TouchableOpacity } from "react-native";
import { Image, Input, Button } from "@rneui/themed";
//
import classes from "./header.style";

const Header = () => {
  const input = React.createRef();
  const [query, setQuery] = useState("");

  const searchQuery = (value) => {
    setQuery(value);
  };

  return (
    <View style={classes.header}>
      <View style={classes.container}>
        <Image
          source={{
            uri: "https://community.infineon.com/html/@7B5F2EC896D82A622880C0B40B9087D7/assets/inf-LOGO.svg",
          }}
          containerStyle={classes.imgBox}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={classes.text}>Developer Community</Text>
      </View>
      <View style={classes.searchBox}>
        <Input
          ref={input}
          style={classes.input}
          placeholder="Search all contents"
          // secureTextEntry={true}
          onChange={(e) => searchQuery(e.target.value)}
        />
        <Text style={classes.searchIcon}>🔍</Text>
        <Text style={query ? classes.crossIcon : classes.none}>❌</Text>
      </View>
      <View style={classes.btn}>
        <TouchableOpacity>
          <Button color="secondary">Ask the community</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
