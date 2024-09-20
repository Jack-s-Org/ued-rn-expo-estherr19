import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";

const PlanButton = ({
  dayText,
  durationText,
  imageSource,
  textColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.planButton} onPress={onPress}>
      <ImageBackground source={imageSource} style={styles.planButtonImg}>
        <Text style={[styles.planButtonMainText, { color: textColor }]}>
          {dayText}
        </Text>
        <Text style={[styles.planButtonSubText, { color: textColor }]}>
          {durationText}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  planButton: {
    margin: 10,
    borderRadius: 16,
    overflow: "hidden",
  },
  planButtonImg: {
    width: 327,
    height: 78,
    justifyContent: "center",
  },
  planButtonMainText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 20,
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  planButtonSubText: {
    fontFamily: "Jost-Regular",
    fontSize: 14,
    justifyContent: "flex-start",
    marginLeft: 20,
  },
});

export default PlanButton;
