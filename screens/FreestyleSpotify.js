import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";

const FreestyleSpotify = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG13.png")}
        style={styles.image}
      >
        <Feather
          name="arrow-left"
          size={24}
          top={48}
          right={155}
          color="#2d2d2d"
          onPress={() => {
            navigation.navigate("Music");
          }}
        />
        <Image
          source={require("../assets/images/gradientButton.png")}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Push Yourself!</Text>
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

  buttonImage: {
    width: 330,
    height: 330,
    position: "absolute",
    top: 510,
  },
  buttonTextContainer: {
    width: 110,
    height: 80,
    overflow: "hidden",
  },
  buttonText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 28,
    color: "#2d2d2d",
    top: 630,
  },
});

export default FreestyleSpotify;
