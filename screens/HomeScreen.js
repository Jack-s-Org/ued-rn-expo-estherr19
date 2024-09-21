import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import PlanButton from "./PlanButton";
import Carousel from "react-native-reanimated-carousel";
import moment from "moment";

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
  const [currentWeek, setCurrentWeek] = React.useState(
    moment().startOf("week")
  );

  const generateWeeks = () => {
    let weeks = [];
    let startDate = moment().startOf("month").startOf("week");

    for (let i = 0; i < 12; i++) {
      weeks.push(
        Array.from({ length: 7 }, (_, index) => {
          const day = moment(startDate).add(index, "days");
          return {
            dayName: day.format("dd").charAt(0),
            date: day.format("D"),
          };
        })
      );
      startDate.add(7, "days");
    }

    return weeks;
  };

  const weeksData = generateWeeks();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={require("../assets/images/BG1.png")}
        style={styles.image}
      >
        <View style={styles.containerAll}>
          <Text style={styles.greetingText}>Hello, Charles</Text>
          <Text style={styles.titleText}>Let's Workout!</Text>

          <View style={styles.textButtonContainer}>
            <Text style={styles.mainText}>June 2024</Text>
            <GradientButton text="This week" />
          </View>
          <BlurView intensity={100} style={styles.calendarContainer}>
            <Carousel
              loop={false}
              width={Dimensions.get("window").width - 80}
              height={60}
              autoPlay={false}
              data={weeksData}
              scrollAnimationDuration={1000}
              containerStyle={styles.carouselStyle}
              renderItem={({ item }) => (
                <View style={styles.weekContainer}>
                  {item.map((day, index) => (
                    <View key={index} style={styles.dayContainer}>
                      <Text style={styles.dayText}>{day.dayName}</Text>
                      <Text style={styles.dateText}>{day.date}</Text>
                    </View>
                  ))}
                </View>
              )}
            />
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
    alignItems: "center",
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
    right: 115,
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 30,
    color: "#2d2d2d",
    right: 45,
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
    marginLeft: 140,
    marginTop: 14,
    alignSelf: "center",
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
  calendarContainer: {
    padding: 10,
    width: 328,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginVertical: 20,
    borderRadius: 16,
  },
  carouselStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  dayContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  dayText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 16,
    color: "#818181",
    paddingBottom: 6,
  },
  dateText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 16,
    color: "#2d2d2d",
  },
});

export default HomeScreen;
