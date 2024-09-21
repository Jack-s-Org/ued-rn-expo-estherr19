import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Dots = ({ activeIndex, totalScreens }) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, activeIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

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

const LoginScreen2 = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG7.png")}
      >
        <Dots activeIndex={activeIndex} totalScreens={9} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>What should we call you?</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#777777"
            />
          </View>
          <View style={styles.textButtonContainer}>
            <GradientButton
              onPress={() => {
                navigation.replace("LoginScreen3");
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
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    top: 96,
    right: 10,
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 24,
    color: "#2d2d2d",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    fontSize: 26,
    paddingHorizontal: 10,
    top: "30%",
    left: "28%",
    right: "28%",
    color: "#2d2d2d",
    borderWidth: 0,
    fontFamily: "Jost-Bold",
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
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 54,
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FF7700",
  },
});

export default LoginScreen2;
