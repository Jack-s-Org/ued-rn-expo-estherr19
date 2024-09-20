import { StyleSheet, Text } from "react-native";
import { View, ImageBackground } from "react-native";

const DiscoverScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/BG5.png")}
        style={styles.image}
      >
        <Text style={styles.titleText}>Workout Modes</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 844,
    resizeMode: "cover",

    alignItems: "center",
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 30,
    color: "#2d2d2d",
    right: 46,
    top: 46,
  },
});

export default DiscoverScreen;
