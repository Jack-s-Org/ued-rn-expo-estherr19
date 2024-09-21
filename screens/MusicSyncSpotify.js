import React, { useRef, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const MusicSyncSpotify = ({ navigation }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

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

    startRotation();
  }, [rotateValue]);

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
            navigation.replace("LoginScreen3");
          }}
        />
        {/* Animated Circle with Rotation */}
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
    width: 500, // Set dimensions if not set already
    height: 500, // Set dimensions if not set already
    position: "absolute",
    top: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default MusicSyncSpotify;
