import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FunModeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG5.png")}
        style={styles.image}
      >
        <Text style={styles.titleText}>Workout Modes</Text>
        <TouchableOpacity style={styles.freeButton}>
          <Image
            source={require("../assets/images/gradientButton.png")}
            style={styles.buttonImage}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Freestyle Mode</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.freeButton2}
          onPress={() => {
            navigation.replace("SelectSong");
          }}
        >
          <Image
            source={require("../assets/images/gradientButton.png")}
            style={styles.buttonImage}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText2}>Fun Mode</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 46,
    marginBottom: 20,
    right: 50,
  },
  freeButton: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 120,
  },
  freeButton2: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: 120,
    bottom: 150,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  buttonTextContainer: {
    width: 110,
    height: 80,
    overflow: "hidden",
  },
  buttonText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 24,
    color: "#2d2d2d",
    zIndex: 1,
    top: 14,
    left: 10,
  },
  buttonText2: {
    fontFamily: "Jost-SemiBold",
    fontSize: 24,
    color: "#2d2d2d",
    zIndex: 1,
    top: 30,
  },
});

export default FunModeScreen;
