import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View, ImageBackground } from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
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

const SelectSong = ({ navigation }) => {
  // State to keep track of the selected button index
  const [selectedButton, setSelectedButton] = useState(0);

  // Handler to change selected button state
  const handleSelect = (index) => {
    setSelectedButton(index);
  };

  // Handler to start action (can be navigation or any other action)
  const handleStart = () => {
    // Add logic for what happens when the start button is pressed
    console.log("Start button pressed!");
    // navigation.navigate('YourNextScreen'); // Example navigation
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG11.png")}
        style={styles.image}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="#2d2d2d"
          style={styles.backButton}
          onPress={() => {
            navigation.replace("Music");
          }}
        />
        <Text style={styles.titleText}>Select Song</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSelect(0)}
          >
            <Image
              source={
                selectedButton === 0
                  ? require("../assets/images/easyChosen.png")
                  : require("../assets/images/easyButton.png")
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSelect(1)}
          >
            <Image
              source={
                selectedButton === 1
                  ? require("../assets/images/mediumChosen.png")
                  : require("../assets/images/mediumButton.png")
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSelect(2)}
          >
            <Image
              source={
                selectedButton === 2
                  ? require("../assets/images/hardChosen.png")
                  : require("../assets/images/hardButton.png")
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.startButtonContainer}>
          <GradientButton onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
          </GradientButton>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    right: 150,
    top: 55,
  },
  image: {
    height: 844,
    resizeMode: "cover",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 30,
    color: "#2d2d2d",
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: 110,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    position: "relative",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  startButtonContainer: {
    top: 460,
    width: 150,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  gradientButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  startButtonText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 18,
    color: "#2d2d2d",
    textAlign: "center",
  },
});

export default SelectSong;
