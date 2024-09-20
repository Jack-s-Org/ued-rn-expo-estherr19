import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import WorkoutDetails from "./WorkoutDetails";

const MusicSyncSpotify = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={require("../assets/images/BG4.png")}
          style={styles.imageBg}
        ></ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  imageBg: {
    height: 1100,
    resizeMode: "cover",
  },
  blurView: {
    padding: 34,
    width: 390,
    height: 310,
    overflow: "hidden",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageLegs: {
    marginLeft: 80,
    // marginBottom: 20,
  },
  arrowContainer: {
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
  textBox1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -230,
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 45,
    color: "#2d2d2d",
  },
  subText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 20,
    color: "#2d2d2d",
    marginLeft: 10,
  },
  textBox2: {
    // flexDirection: "column",
  },
  horizontalLine: {
    borderBottomColor: "#5E5E5E",
    borderBottomWidth: 2,
    width: "100%",
    marginVertical: 22,
  },
  verticalLine: {
    borderLeftColor: "#5E5E5E",
    borderLeftWidth: 2,
    height: "100%",
    marginHorizontal: 20,
  },
  smallTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {
    flexDirection: "column",
  },
  boldText: {
    fontFamily: "Jost-Bold",
    fontSize: 16,
    color: "#2d2d2d",
  },
  regularText: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
    color: "#797979",
  },
  orangeButton: {
    height: 52,
    width: 352,
    backgroundColor: "#FF7700",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 78,
    position: "absolute",
    bottom: 20,
    elevation: 5,
    shadowColor: "#7E4CA9",
  },
  buttonText: {
    color: "#2d2d2d",
    fontFamily: "Jost-SemiBold",
    fontSize: 16,
  },
  workoutContainer: {
    justifyContent: "flex-start",
    top: 46,
  },
  exerciseText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 18,
    color: "#2d2d2d",
    marginLeft: 35,
  },
});

export default MusicSyncSpotify;
