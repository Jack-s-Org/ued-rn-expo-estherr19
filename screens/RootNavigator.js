import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import LoginScreen1 from "./LoginScreen1";
import Day1Details from "./Day1Details";
import MusicChoice from "./MusicChoice";
import MusicSyncSpotify from "./MusicSyncSpotify";
import MusicSyncYtM from "./MusicSyncYtM";
import MetronomeMode from "./MetronomeMode";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
        <Stack.Screen name="Day1Details" component={Day1Details} />
        <Stack.Screen name="MusicChoice" component={MusicChoice} />
        <Stack.Screen name="MusicSyncSpotify" component={MusicSyncSpotify} />
        <Stack.Screen name="MusicSyncYtM" component={MusicSyncYtM} />
        <Stack.Screen name="MetronomeMode" component={MetronomeMode} />
        <Stack.Screen name="Main" component={MainScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
