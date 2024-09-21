import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

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

const LoginScreen10 = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(8);
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG7.png")}
      >
        <Dots activeIndex={activeIndex} totalScreens={9} />
        <AntDesign
          name="arrowleft"
          size={24}
          color="#2d2d2d"
          style={styles.backButton}
          onPress={() => {
            navigation.replace("LoginScreen9");
          }}
        />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Do you have any knee</Text>
            <Text style={styles.welcome2Text}>issue?</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.planButton}
                onPress={() => setSelectedButton(0)}
              >
                <ImageBackground
                  source={
                    selectedButton === 0
                      ? require("../assets/images/kneeYes.png")
                      : require("../assets/images/kneeyesButton.png")
                  }
                  style={styles.buttonImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.kneeButton}
                onPress={() => setSelectedButton(1)}
              >
                <ImageBackground
                  source={
                    selectedButton === 1
                      ? require("../assets/images/kneeNo.png")
                      : require("../assets/images/kneenoButton.png")
                  }
                  style={styles.buttonImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.textButtonContainer}>
            <GradientButton
              onPress={() => {
                navigation.replace("LoginScreen11");
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
    top: 72,
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 24,
    color: "#2d2d2d",
    right: 15,
  },
  welcome2Text: {
    fontFamily: "DaysOne-Regular",
    fontSize: 24,
    color: "#2d2d2d",
    marginBottom: 20,
    right: 115,
  },
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  kneeButton: {
    marginVertical: 2,
  },
  buttonImage: {
    width: 380,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
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

export default LoginScreen10;
