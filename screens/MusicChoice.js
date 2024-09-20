import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

const MusicChoice = ({ navigation }) => {
  // Initialize with null so that no radio button is selected initially
  const [checked, setChecked] = React.useState(null);

  const handlePress = (value) => {
    setChecked(value);

    setTimeout(() => {
      // Navigate to the respective screen based on the selected radio button
      if (value === "first") {
        navigation.navigate("MusicSyncSpotify"); // Replace with your actual screen name
      } else if (value === "second") {
        navigation.navigate("MusicSyncYtM"); // Replace with your actual screen name
      } else if (value === "third") {
        navigation.navigate("MetronomeMode"); // Replace with your actual screen name
      }
    }, 1000); // 2-second delay
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG3.png")}
        style={styles.imageBg}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>How would you like to</Text>
          <Text style={styles.titleText}>listen to music?</Text>
          <Text style={styles.subText}>Choose your mode of music.</Text>
        </View>

        {/* First Option with BlurView and RadioButton */}
        <TouchableOpacity onPress={() => handlePress("first")}>
          {checked === "first" ? (
            <LinearGradient
              colors={["#fff", "#C2F04C"]} // Gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.commonView}
            >
              <Text style={styles.musicText}>Sync with Spotify</Text>
              <RadioButton
                value="first"
                status="checked"
                uncheckedColor="#FFF"
                color="#FFF"
                paddingRight={26}
              />
            </LinearGradient>
          ) : (
            <BlurView intensity={80} style={styles.commonView}>
              <Text style={styles.musicText}>Sync with Spotify</Text>
              <RadioButton
                value="first"
                status="unchecked"
                uncheckedColor="#FFF"
                color="#FFF"
                onPress={() => handlePress("first")}
                paddingRight={26}
              />
            </BlurView>
          )}
        </TouchableOpacity>

        {/* Second Option with BlurView and RadioButton */}
        <TouchableOpacity onPress={() => handlePress("second")}>
          {checked === "second" ? (
            <LinearGradient
              colors={["#fff", "#FF8E69"]} // Gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.commonView}
            >
              <Text style={styles.musicText}>Sync with YouTube Music</Text>
              <RadioButton
                value="second"
                status="checked"
                uncheckedColor="#FFF"
                color="#FFF"
                paddingRight={26}
              />
            </LinearGradient>
          ) : (
            <BlurView intensity={80} style={styles.commonView}>
              <Text style={styles.musicText}>Sync with YouTube Music</Text>
              <RadioButton
                value="second"
                status="unchecked"
                uncheckedColor="#FFF"
                color="#FFF"
                onPress={() => handlePress("second")}
                paddingRight={26}
              />
            </BlurView>
          )}
        </TouchableOpacity>

        {/* Third Option with BlurView and RadioButton */}
        <TouchableOpacity onPress={() => handlePress("third")}>
          {checked === "third" ? (
            <LinearGradient
              colors={["#fff", "#CEB2FF"]} // Gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.commonView}
            >
              <Text style={styles.musicText}>Metronome Mode</Text>
              <RadioButton
                value="third"
                status="checked"
                uncheckedColor="#FFF"
                color="#FFF"
                paddingRight={26}
              />
            </LinearGradient>
          ) : (
            <BlurView intensity={80} style={styles.commonView}>
              <Text style={styles.musicText}>Metronome Mode</Text>
              <RadioButton
                value="third"
                status="unchecked"
                uncheckedColor="#FFF"
                color="#FFF"
                onPress={() => handlePress("third")}
                paddingRight={26}
              />
            </BlurView>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 224,
  },
  titleText: {
    fontFamily: "DaysOne-Regular",
    fontSize: 25,
    color: "#2d2d2d",
    textAlign: "center",
  },
  subText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    color: "#2d2d2d",
    marginLeft: 16,
  },
  musicText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    color: "#2d2d2d",
  },
  commonView: {
    width: 328,
    height: 72,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
    paddingLeft: 26,
    overflow: "hidden",
    top: 250,
  },
});

export default MusicChoice;
