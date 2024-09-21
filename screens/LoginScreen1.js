import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

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

const LoginScreen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG7.png")}
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>JustFit</Text>
          </View>
          <View style={styles.textButtonContainer}>
            <GradientButton
              onPress={() => {
                navigation.replace("LoginScreen2");
              }}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </GradientButton>
            <Text style={styles.loginText}>
              Already have an account? Log In
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 32,
    color: "#2d2d2d",
  },
  textButtonContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  gradientButton: {
    marginBottom: 10,
  },
  gradientBackground: {
    width: 271,
    height: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Jost-Medium",
    fontSize: 16,
  },
  loginText: {
    marginTop: 10,
    color: "#2d2d2d",
    fontFamily: "Jost-Medium",
    fontSize: 14,
  },
});

export default LoginScreen1;
