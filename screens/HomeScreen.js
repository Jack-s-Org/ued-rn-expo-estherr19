import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import PlanButton from "./PlanButton";

const GradientButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.gradientButton}>
      <LinearGradient
        colors={["#FFD100", "#FF7700"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBackground}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={require("../assets/images/backgroundOne.png")}
        style={styles.image}
      >
        <View style={styles.containerAll}>
          <Text style={styles.greetingText}>Hello, Charles</Text>
          <Text style={styles.titleText}>Let's Workout!</Text>

          <View style={styles.textButtonContainer}>
            <Text style={styles.mainText}>June 2024</Text>
            <GradientButton text="This week" />
          </View>
          <BlurView
            intensity={100}
            style={{
              padding: 10,
              width: "100%",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <View>
              <Text>M</Text>
              <Text>10</Text>
            </View>
            <View>
              <Text>T</Text>
              <Text>11</Text>
            </View>
            <View>
              <Text>W</Text>
              <Text>12</Text>
            </View>
            <View>
              <Text>T</Text>
              <Text>13</Text>
            </View>
            <View>
              <Text>F</Text>
              <Text>14</Text>
            </View>
            <View>
              <Text>S</Text>
              <Text>15</Text>
            </View>
            <View>
              <Text>S</Text>
              <Text>16</Text>
            </View>
          </BlurView>
          <View style={styles.planButtonContainer}>
            <PlanButton
              dayText="Day 1"
              durationText="6 mins"
              imageSource={require("../assets/images/dayOneButton.png")}
              textColor="#2d2d2d"
              onPress={() => navigation.replace("Day1Details")}
            />

            <PlanButton
              dayText="Day 2"
              durationText="6 mins"
              imageSource={require("../assets/images/dayTwoButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 3"
              durationText="Take a break!"
              imageSource={require("../assets/images/dayThreeButton.png")}
              textColor="#fff"
            />

            <PlanButton
              dayText="Day 4"
              durationText="8 mins"
              imageSource={require("../assets/images/dayFourButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 5"
              durationText="8 mins"
              imageSource={require("../assets/images/dayFiveButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 6"
              durationText="8 mins"
              imageSource={require("../assets/images/daySixButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 7"
              durationText="Take a break!"
              imageSource={require("../assets/images/dayThreeButton.png")}
              textColor="#fff"
            />

            <PlanButton
              dayText="Day 8"
              durationText="8 mins"
              imageSource={require("../assets/images/dayEightButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 9"
              durationText="9 mins"
              imageSource={require("../assets/images/dayTwoButton.png")}
              textColor="#2d2d2d"
            />

            <PlanButton
              dayText="Day 10"
              durationText="9 mins"
              imageSource={require("../assets/images/dayFiveButton.png")}
              textColor="#2d2d2d"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  containerAll: {
    paddingTop: 62,
  },
  image: {
    height: 1300,
    resizeMode: "cover",

    alignItems: "center",
  },
  greetingText: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
    color: "#2d2d2d",
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 30,
    color: "#2d2d2d",
  },
  mainText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 20,
    color: "#2d2d2d",
    marginTop: 18,
  },
  textButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  gradientButton: {
    marginLeft: 140, // Adjust to move the button horizontally
    marginTop: 14, // Adjust to move the button vertically
    alignSelf: "center", // Adjust to align the button vertically within its container
  },
  gradientBackground: {
    width: 90,
    height: 34,
    borderRadius: 20, // Round shape
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#2d2d2d",
    fontFamily: "Jost-SemiBold",
    fontSize: 14,
  },
  planButtonContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    marginTop: 16,
  },
});

export default HomeScreen;
