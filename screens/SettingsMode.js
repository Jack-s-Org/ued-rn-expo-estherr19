import { StyleSheet, Text } from "react-native";
import { View, ImageBackground, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

const SettingsMode = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/BG12.png")}
        style={styles.image}
      >
        <Feather
          name="arrow-left"
          size={24}
          top={48}
          right={155}
          color="#2d2d2d"
          onPress={() => {
            navigation.navigate("User");
          }}
        />
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
  statisticDetails: {
    top: 120,
  },
  statisticsTitle: {
    fontFamily: "DaysOne-Regular",
    fontSize: 26,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
    color: "#2d2d2d",
  },
  statisticssubText: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
    color: "#818181",
  },
  statisticsImg: {
    width: 345,
    height: 200,
  },
  profileDetails: {
    marginTop: 120,
  },
  profileTitle: {
    marginBottom: 10,
    fontFamily: "DaysOne-Regular",
    fontSize: 26,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
    color: "#2d2d2d",
  },
  profileImg: {
    width: 345,
    height: 100,
  },
});

export default SettingsMode;
