import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur"; // Import BlurView

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      <BlurView intensity={80} style={styles.blurView}>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const descriptor = descriptors[route.key];
            const { options } = descriptor;

            const isFocused = state.index === index;
            const iconColor = isFocused ? "#2d2d2d" : "#818181";
            const icon = options.tabBarIcon({
              focused: isFocused,
              color: iconColor,
            });

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabBarItem}
              >
                <View style={styles.iconWrapper}>
                  {isFocused ? (
                    <View style={styles.highlightedTab}>{icon}</View>
                  ) : (
                    icon
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    width: 276,
    height: 74,
    position: "absolute",
    bottom: 20,
    left: 40,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#afafaf",
    margin: 16,
    overflow: "hidden",
  },
  blurView: {
    flex: 1,
    borderRadius: 60,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "transparent",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  highlightedTab: {
    backgroundColor: "#C2F04C",
    borderRadius: 100,
    width: 62,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBar;
