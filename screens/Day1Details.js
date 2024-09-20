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

const Day1Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={require("../assets/images/BG2.png")}
          style={styles.imageBg}
        >
          <BlurView intensity={80} style={styles.blurView}>
            <View style={styles.arrowContainer}>
              <Feather
                name="arrow-left"
                size={24}
                color="#2d2d2d"
                onPress={() => {
                  navigation.replace("Main");
                }}
              />
            </View>
            <Image
              source={require("../assets/images/legs.png")}
              style={styles.imageLegs}
            />

            <View style={styles.textBox1}>
              <Text style={styles.titleText}>Day 1</Text>
              <FontAwesome6
                name="fire"
                size={24}
                color="#FF7700"
                marginLeft={86}
              />
              <Text style={styles.subText}>54.5 kcal</Text>
            </View>

            <View style={styles.textBox2}>
              <View style={styles.horizontalLine} />
              <View style={styles.smallTextBox}>
                <View style={styles.detailsText}>
                  <Text style={styles.boldText}>6 min</Text>
                  <Text style={styles.regularText}>Duration</Text>
                </View>

                <View style={styles.verticalLine} />

                <View style={styles.detailsText}>
                  <Text style={styles.boldText}>Beginner</Text>
                  <Text style={styles.regularText}>Level</Text>
                </View>

                <View style={styles.verticalLine} />

                <View style={styles.detailsText}>
                  <Text style={styles.boldText}>Legs</Text>
                  <Text style={styles.regularText}>Focus Area</Text>
                </View>
              </View>
              <View style={styles.horizontalLine} />
            </View>
          </BlurView>
          <View style={styles.workoutContainer}>
            <Text style={styles.exerciseText}> Exercises (7)</Text>
            <WorkoutDetails
              imageSource={require("../assets/images/workout1.png")}
              workoutName="Mountain Climber"
              duration="00:30"
              reps="25 reps"
            />
            <WorkoutDetails
              imageSource={require("../assets/images/workout2.jpg")}
              workoutName="Backward Lunge"
              duration="00:20"
              reps="25 reps"
            />
            <WorkoutDetails
              imageSource={require("../assets/images/workout3.jpg")}
              workoutName="Inclined Push-Ups"
              duration="00:10"
              reps="25 reps"
            />
            <WorkoutDetails
              imageSource={require("../assets/images/workout4.jpg")}
              workoutName="High Stepping"
              duration="00:30"
              reps="25 reps"
            />
            <WorkoutDetails
              imageSource={require("../assets/images/workout5.png")}
              workoutName="Cobra Stretch"
              duration="00:30"
              reps="25 reps"
            />
            <WorkoutDetails
              imageSource={require("../assets/images/workout6.jpg")}
              workoutName="Reverse Crunches"
              duration="00:20"
              reps="25 reps"
            />
          </View>
        </ImageBackground>
      </ScrollView>

      <TouchableOpacity
        style={styles.orangeButton}
        onPress={() => navigation.replace("MusicChoice")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
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

export default Day1Details;
