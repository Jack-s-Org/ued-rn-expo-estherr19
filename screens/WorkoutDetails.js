import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const WorkoutDetails = ({ imageSource, workoutName, duration, reps }) => {
  return (
    <View style={styles.workoutDetails}>
      <View style={styles.img}>
        <Image source={imageSource} style={styles.workoutImg} />
      </View>

      <View style={styles.workoutText}>
        <Text style={styles.boldText}>{workoutName}</Text>
        <View style={styles.detailsBox}>
          <View style={styles.duration}>
            <FontAwesome6 name="clock" size={18} color="#FF7700" padding={6} />
            <Text style={styles.regularText}>{duration}</Text>
          </View>
          <View style={styles.reps}>
            <MaterialIcons name="refresh" size={26} color="#FF7700" />
            <Text style={styles.regularText}>{reps}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutDetails: {
    flexDirection: "row",
    paddingLeft: 40,
    alignItems: "center",
    padding: 16,
  },
  img: {
    borderRadius: 14,
    elevation: 5,
    shadowColor: "#7E4CA9",
  },
  workoutImg: {
    width: 72,
    height: 72,
    borderRadius: 14,
  },
  workoutText: {
    justifyContent: "center",
    paddingLeft: 24,
  },
  detailsBox: {
    flexDirection: "row",
    marginLeft: -6,
  },
  duration: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  reps: {
    flexDirection: "row",
    alignItems: "center",
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
});

export default WorkoutDetails;
