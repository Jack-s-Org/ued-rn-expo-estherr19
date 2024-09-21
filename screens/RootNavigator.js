import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import LoginScreen1 from "./LoginScreen1";
import LoginScreen2 from "./LoginScreen2";
import LoginScreen3 from "./LoginScreen3";
import LoginScreen4 from "./LoginScreen4";
import LoginScreen5 from "./LoginScreen5";
import LoginScreen6 from "./LoginScreen6";
import LoginScreen7 from "./LoginScreen7";
import LoginScreen8 from "./LoginScreen8";
import LoginScreen9 from "./LoginScreen9";
import LoginScreen10 from "./LoginScreen10";
import LoginScreen11 from "./LoginScreen11";
import LoginScreen12 from "./LoginScreen12";
import Day1Details from "./Day1Details";
import MusicChoice from "./MusicChoice";
import MusicSyncSpotify from "./MusicSyncSpotify";
import SpotifyBreak from "./SpotifyBreak";
import MusicSyncSpotify2 from "./MusicSyncSpotify2";
import MusicSyncYtM from "./MusicSyncYtM";
import YtMBreak from "./YtMBreak";
import MusicSyncYtM2 from "./MusicSyncYtM2";
import MetronomeMode from "./MetronomeMode";
import MetroBreak from "./MetroBreak";
import MetronomeMode2 from "./MetronomeMode2";
import SelectSong from "./SelectSong";
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
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
        <Stack.Screen name="LoginScreen3" component={LoginScreen3} />
        <Stack.Screen name="LoginScreen4" component={LoginScreen4} />
        <Stack.Screen name="LoginScreen5" component={LoginScreen5} />
        <Stack.Screen name="LoginScreen6" component={LoginScreen6} />
        <Stack.Screen name="LoginScreen7" component={LoginScreen7} />
        <Stack.Screen name="LoginScreen8" component={LoginScreen8} />
        <Stack.Screen name="LoginScreen9" component={LoginScreen9} />
        <Stack.Screen name="LoginScreen10" component={LoginScreen10} />
        <Stack.Screen name="LoginScreen11" component={LoginScreen11} />
        <Stack.Screen name="LoginScreen12" component={LoginScreen12} />
        <Stack.Screen name="Day1Details" component={Day1Details} />
        <Stack.Screen name="MusicChoice" component={MusicChoice} />
        <Stack.Screen name="MusicSyncSpotify" component={MusicSyncSpotify} />
        <Stack.Screen name="SpotifyBreak" component={SpotifyBreak} />
        <Stack.Screen name="MusicSyncSpotify2" component={MusicSyncSpotify2} />
        <Stack.Screen name="MusicSyncYtM" component={MusicSyncYtM} />
        <Stack.Screen name="YtMBreak" component={YtMBreak} />
        <Stack.Screen name="MusicSyncYtM2" component={MusicSyncYtM2} />
        <Stack.Screen name="MetronomeMode" component={MetronomeMode} />
        <Stack.Screen name="MetroBreak" component={MetroBreak} />
        <Stack.Screen name="MetronomeMode2" component={MetronomeMode2} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="SelectSong" component={SelectSong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
