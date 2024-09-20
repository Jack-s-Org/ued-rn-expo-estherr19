import { StyleSheet, Text } from "react-native";
import { View, ImageBackground, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const MeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/BG6.png")}
        style={styles.image}
      >
        <Entypo
          name="dots-three-horizontal"
          size={26}
          color="white"
          top={38}
          left={155}
        />
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/userPhoto.jpg")}
            style={styles.imageUser}
          />
        </View>

        <Text style={styles.titleText}>Charles Lim</Text>
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
    fontSize: 20,
    color: "#2d2d2d",
    top: 100,
  },
  imgContainer: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#7E4CA9",
    top: 86,
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});

export default MeScreen;
