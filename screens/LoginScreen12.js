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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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

const LoginScreen12 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG7.png")}
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>You are a...</Text>
            <Text style={styles.welcome2Text}>Sweat Starter!</Text>
          </View>
          <Image
            source={require("../assets/images/stairsUp.png")}
            style={styles.icon}
          />
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              Not bad! We can help you get closer to your dream fitness level
              from now on.
            </Text>
          </View>

          <View style={styles.textButtonContainer}>
            <GradientButton
              onPress={() => {
                navigation.replace("Main");
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
    fontSize: 28,
    color: "#2d2d2d",
    left: 4,
  },
  welcome2Text: {
    fontFamily: "DaysOne-Regular",
    fontSize: 32,
    color: "#2d2d2d",
    marginBottom: 20,
    // right: 122,
  },
  icon: {
    width: 114,
    height: 114,
    bottom: 300,
  },
  subTextContainer: {
    width: 280,
    height: 80,
    justifyContent: "center",
    alignContent: "center",
    bottom: 250,
  },
  subText: {
    textAlign: "center",
    fontFamily: "Jost-Medium",
    fontSize: 18,
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

export default LoginScreen12;
