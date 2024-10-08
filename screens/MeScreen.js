import { StyleSheet, Text } from "react-native";
import { View, ImageBackground, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const MeScreen = ({ navigation }) => {
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
          onPress={() => {
            navigation.replace("SettingsMode");
          }}
        />
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/userPhoto.jpg")}
            style={styles.imageUser}
          />
        </View>

        <Text style={styles.titleText}>Charles Lim</Text>
        <View style={styles.statisticDetails}>
          <Text style={styles.statisticsTitle}>Statistics</Text>
          <Text style={styles.statisticssubText}>This week</Text>
          <Image
            source={require("../assets/images/statistics.png")}
            style={styles.statisticsImg}
          />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileTitle}>Profile</Text>
          <Image
            source={require("../assets/images/profileDetails.png")}
            style={styles.profileImg}
          />
        </View>
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

export default MeScreen;
