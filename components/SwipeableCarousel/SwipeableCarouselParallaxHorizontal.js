import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import { useWindowDimensions, Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = PAGE_WIDTH / 2;

const data = [
  <Slide index={0} backgroundColor="red" />,
  <Slide index={1} backgroundColor="orange" />,
  <Slide index={2} backgroundColor="yellow" />,
  <Slide index={3} backgroundColor="green" />,
  <Slide index={4} backgroundColor="blue" />,
];

function SwipeableCarouselParallaxHorizontal() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  const isVertical = true;

  const baseOptions = isVertical
    ? {
        vertical: false,
        width: windowWidth,
        height: windowWidth * 0.6,
      }
    : {
        vertical: false,
        width: windowWidth,
        height: windowWidth * 0.6,
      };

  return (
    <View>
      <View
        style={{
          height: windowWidth * 0.6,
        }}
      >
        <Carousel
          {...baseOptions}
          style={{
            width: windowWidth,
          }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          // autoPlay={true}
          // autoPlayInterval={2000}
          data={data}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index }) => data[index]}
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Dots data={data} currentIndex={index} />
      </View>
    </View>
  );
}

export default SwipeableCarouselParallaxHorizontal;
