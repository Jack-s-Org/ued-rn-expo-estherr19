import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.gradientButton} onPress={onPress}>
      <LinearGradient
        colors={["#FFD100", "#FF7700"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBackground}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const LoginScreen11 = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            navigation.replace("LoginScreen12");
          }, 1000);
          return prevProgress;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG7.png")}
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Generating your workout</Text>
            <Text style={styles.welcome2Text}>plan...</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>

          <Image
            source={require("../assets/images/animatedCircle.png")}
            style={styles.circle}
          />

          <View style={styles.textButtonContainer}>
            <GradientButton
              onPress={() => {
                navigation.replace("LoginScreen12");
              }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </GradientButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    right: 150,
    top: 46,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    top: 94,
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 24,
    color: "#2d2d2d",
    left: 4,
  },
  welcome2Text: {
    fontFamily: "DaysOne-Regular",
    fontSize: 24,
    color: "#2d2d2d",
    marginBottom: 20,
    right: 122,
  },
  progressContainer: {
    marginTop: 10,
    marginBottom: -20,
    alignItems: "center",
  },
  progressText: {
    top: 170,
    fontSize: 40,
    fontFamily: "Jost-Bold",
    position: "absolute",
    zIndex: 1,
    color: "#2d2d2d",
  },
  circle: {
    top: -25,
  },
  textButtonContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  gradientButton: {
    marginBottom: 10,
  },
  gradientBackground: {
    width: 348,
    height: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Jost-Medium",
    fontSize: 16,
  },
});

export default LoginScreen11;
