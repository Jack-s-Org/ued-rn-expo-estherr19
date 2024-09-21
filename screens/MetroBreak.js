import React, { useRef, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const { height: screenHeight } = Dimensions.get("window");

const MetroBreak = ({ navigation }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const blinkOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 8000,
          useNativeDriver: true,
        })
      ).start();
    };

    const startBlinking = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(blinkOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startRotation();
    startBlinking();

    const timeout = setTimeout(() => {
      navigation.replace("MetronomeMode2");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [rotateValue, blinkOpacity, navigation]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG4.png")}
        style={styles.imageBg}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="#2d2d2d"
          style={styles.backButton}
          onPress={() => {
            navigation.replace("Day1Details");
          }}
        />
        <Text style={styles.workoutName}>Take a break!</Text>
        <View style={styles.timeTextContainer}>
          <Text style={styles.timeText}>00:30</Text>
          <Text style={styles.secondsText}>s</Text>
        </View>

        <Animated.View
          style={[
            styles.halfCircle,
            styles.leftHalfCircle,
            { opacity: blinkOpacity },
          ]}
        />

        <Animated.View
          style={[
            styles.halfCircle,
            styles.rightHalfCircle,
            { opacity: blinkOpacity },
          ]}
        />

        <Animated.Image
          source={require("../assets/images/animatedCircle.png")}
          style={[styles.circle, { transform: [{ rotate }] }]}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    height: 844,
    resizeMode: "cover",
  },
  backButton: {
    left: 30,
    top: 48,
  },
  circle: {
    width: 500,
    height: 500,
    position: "absolute",
    top: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  workoutName: {
    fontFamily: "DaysOne-Regular",
    fontSize: 32,
    color: "#2d2d2d",
    justifyContent: "center",
    alignSelf: "center",
    top: 70,
  },
  timeTextContainer: {
    width: 180,
    height: 76,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1,
    top: 190,
    flexDirection: "row",
  },
  timeText: {
    fontFamily: "Jost-Bold",
    fontSize: 50,
  },
  secondsText: {
    fontFamily: "Jost-Regular",
    fontSize: 32,
    color: "#818181",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 4,
  },
  halfCircle: {
    position: "absolute",
    width: 169,
    height: 500,
    borderRadius: 100,
    backgroundColor: "rgba(255, 119, 0, 0.3)",
  },
  leftHalfCircle: {
    left: -130,
    top: 110,
  },
  rightHalfCircle: {
    right: -130,
    top: 110,
  },
});

export default MetroBreak;
