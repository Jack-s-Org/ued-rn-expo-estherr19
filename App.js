import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";

import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

// const Icon = createIconSetFromIcoMoon(
//   require("./assets/icon/selection.json"),
//   "IcoMoon",
//   "icomoon.ttf"
// );
export default function App() {
  const [fontsLoaded] = useFonts({
    // IcoMoon: require("./assets/icon/icomoon.ttf"),
    "DaysOne-Regular": require("./assets/fonts/DaysOne-Regular.ttf"),

    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),

    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),

    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),

    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <RootNavigator />;

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView>
  //       <Icon name="pacman" size={50} color="orange" />
  //       <Text
  //         style={{
  //           fontFamily: "Jost-Regular",
  //           fontSize: 16,
  //           marginLeft: 30,
  //           color: "#2d2d2d",
  //         }}
  //       >
  //         Hello, Charles
  //       </Text>
  //       <Text
  //         style={{
  //           fontFamily: "DaysOne-Regular",
  //           fontSize: 30,
  //           marginLeft: 30,
  //           color: "#2d2d2d",
  //         }}
  //       >
  //         Let's Workout!
  //       </Text>
  //       {/* <VideoPlayer /> */}
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}
