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
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { height: screenHeight } = Dimensions.get("window");

const MusicSyncYtM2 = ({ navigation }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const blinkOpacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const dragOffset = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef(new Audio.Sound()).current;

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.loadAsync(require("../assets/audio/roseMusic.mp3"));
      } catch (error) {
        console.error("Error loading sound:", error);
      }
    };

    loadSound();

    return () => {
      sound.unloadAsync();
    };
  }, [sound]);

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

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        translateY.setValue(dragOffset.current + gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        dragOffset.current += gestureState.dy;

        if (dragOffset.current < -screenHeight / 4) {
          Animated.spring(translateY, {
            toValue: -screenHeight / 2,
            useNativeDriver: true,
          }).start(() => (dragOffset.current = -screenHeight / 2));
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => (dragOffset.current = 0));
        }
      },
    })
  ).current;

  const togglePlayPause = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

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
        <Text style={styles.workoutName}>Inclined Push-Up</Text>
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
            navigation.replace("YtMBreak");
          }}
        >
          <BlurView intensity={80} style={styles.breakButtonBg}>
            <Text style={styles.breakText}>Break</Text>
          </BlurView>
        </TouchableOpacity>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.bottomTab,
            {
              transform: [{ translateY }],
              bottom: -screenHeight / 1.3,
            },
          ]}
        >
          <LinearGradient colors={["#ffff", "#CEB2FF"]} style={styles.gradient}>
            <View style={styles.tabIndicator} />

            <Text style={styles.tabText}>Listening From YouTube Music</Text>
            <View style={styles.audioPlayer}>
              <Image
                source={require("../assets/images/artistPhoto.png")}
                style={styles.artistPhoto}
              />
              <View style={styles.songDetails}>
                <Text style={styles.songName}>On The Ground</Text>
                <Text style={styles.artistName}>Rosé</Text>
              </View>
              <TouchableOpacity
                onPress={togglePlayPause}
                style={styles.playPauseButton}
              >
                <FontAwesome6
                  name={isPlaying ? "pause" : "play"}
                  size={32}
                  color="#2d2d2d"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/musicDuration.png")}
              style={styles.musicDuration}
            />
            <Image
              source={require("../assets/images/playlist1.png")}
              style={styles.playlist1}
            />
            <Image
              source={require("../assets/images/playlist2.png")}
              style={styles.playlist1}
            />
          </LinearGradient>
        </Animated.View>
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
  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight / 1,
    backgroundColor: "transparent",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    alignItems: "center",
    paddingVertical: 16,
    zIndex: 2,
  },
  gradient: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
  },
  tabIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
    marginTop: 18,
    marginBottom: 10,
    alignSelf: "center",
  },
  tabText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 14,
    color: "#2d2d2d",
    textAlign: "center",
    marginBottom: 10,
  },
  audioPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    bottom: 14,
  },
  artistPhoto: {
    width: 100,
    height: 100,
    right: 20,
  },
  songDetails: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    bottom: 6,
    right: 26,
  },
  songName: {
    fontFamily: "Jost-Bold",
    fontSize: 18,
    color: "#2d2d2d",
  },
  artistName: {
    fontFamily: "Jost-Regular",
    fontSize: 14,
    color: "#2d2d2d",
  },
  playPauseButton: {
    bottom: 6,
  },
  musicDuration: {
    width: 338,
    bottom: 34,
    resizeMode: "contain",

    alignSelf: "center",
  },
  playlist1: {
    width: 360,
    height: 180,
    resizeMode: "contain",
    bottom: 20,
    marginBottom: 10,
    alignSelf: "center",
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

export default MusicSyncYtM2;
