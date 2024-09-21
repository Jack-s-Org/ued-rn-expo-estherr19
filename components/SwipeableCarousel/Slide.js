import React from "react";
import { Text, View } from "react-native";

const Slide = ({ index, backgroundColor }) => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Text>{index}</Text>
    </View>
  );
};

export default Slide;
