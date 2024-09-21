import React from "react";
import { View } from "react-native";

const Dots = ({ data, currentIndex }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {data.map((_, index) => (
        <View
          key={index}
          style={{
            height: 8,
            width: 8,
            marginRight: 8,
            backgroundColor: index === currentIndex ? "#000" : "#dadada",
          }}
        />
      ))}
    </View>
  );
};

export default Dots;
