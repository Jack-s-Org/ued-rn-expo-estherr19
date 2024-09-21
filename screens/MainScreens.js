import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import FunModeScreen from "./FunModeScreen";

import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import CustomTabBar from "@/components/CustomTabBar";
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2d2d2d",
        }}
      >
        <Tab.Screen
          name="Plan"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={30}
                color={color}
              />
            ),
            tabBarLabel: null,
          }}
        />
        <Tab.Screen
          name="Music"
          component={FunModeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="music" size={30} color={color} />
            ),
            tabBarLabel: null,
          }}
        />
        <Tab.Screen
          name="User"
          component={MeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={28} color={color} />
            ),
            tabBarLabel: null,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
