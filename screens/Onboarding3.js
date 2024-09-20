import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const GradientButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.gradientButton} onPress={onPress}>
      <LinearGradient
        colors={["#FFD100", "#FF7700"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBackground}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Onboarding3 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/Onboarding3.png")}
      >
        <View style={styles.textContainer}>
          <View style={styles.titleText}>
            <Text style={styles.welcomeText}>Game Up Your</Text>
            <Text style={styles.welcomeText}>Workout</Text>
          </View>

          <Text style={styles.detailsText}>
            Make workouts fun with Fun Mode, syncing exercises to your favorite
            songs like a rhythm game.
          </Text>
        </View>
        <View style={styles.textButtonContainer}>
          <GradientButton
            onPress={() => {
              navigation.replace("LoginScreen1");
            }}
          >
            <AntDesign name="arrowright" size={24} color="white" />
          </GradientButton>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 800,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    padding: 36,
    paddingTop: 380,
  },
  titleText: {
    marginBottom: 12,
  },
  welcomeText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 32,
    color: "#FF7700",
  },
  detailsText: {
    fontFamily: "Jost-Regular",
    fontSize: 18,
    color: "#2d2d2d",
  },
  mainText: {
    fontFamily: "Jost-SemiBold",
    fontSize: 20,
    color: "#2d2d2d",
    paddingTop: 18,
  },
  textButtonContainer: {
    // alignItems: "center",
    // marginTop: 10,
  },
  gradientButton: {
    marginLeft: 250, // Adjust to move the button horizontally
    marginTop: 16, // Adjust to move the button vertically
    alignSelf: "center", // Adjust to align the button vertically within its container
  },
  gradientBackground: {
    width: 54,
    height: 54,
    borderRadius: 50, // Round shape
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    height: 54,
    width: 200,
  },
});

export default Onboarding3;
