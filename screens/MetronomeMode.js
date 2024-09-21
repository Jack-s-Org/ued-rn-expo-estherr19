import React, { useRef, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Animated,
  Text,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { height: screenHeight } = Dimensions.get("window");

const MetronomeMode = ({ navigation }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const blinkOpacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const dragOffset = useRef(0);

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
  }, [rotateValue, blinkOpacity]);

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
        <Text style={styles.workoutName}>Abdominal Crunches</Text>
        <View style={styles.repsTextContainer}>
          <Text style={styles.numberText}>7</Text>
          <Text style={styles.repsText}>repeats</Text>
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
        <TouchableOpacity
          style={styles.breakButton}
          onPress={() => {
            navigation.replace("MetroBreak");
          }}
        >
          <BlurView intensity={80} style={styles.breakButtonBg}>
            <Text style={styles.breakText}>Break</Text>
          </BlurView>
        </TouchableOpacity>
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
    fontSize: 24,
    color: "#2d2d2d",
    justifyContent: "center",
    alignSelf: "center",
    top: 70,
  },
  repsTextContainer: {
    width: 84,
    height: 184,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1,
    top: 140,
  },
  numberText: {
    fontFamily: "Jost-Bold",
    fontSize: 120,
    marginBottom: -30,
  },
  repsText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
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
  breakButton: {
    justifyContent: "center",
    alignItems: "center",
    top: 365,
  },
  breakButtonBg: {
    width: 326,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    overflow: "hidden",
  },
  breakText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 16,
    color: "white",
  },
});

export default MetronomeMode;
