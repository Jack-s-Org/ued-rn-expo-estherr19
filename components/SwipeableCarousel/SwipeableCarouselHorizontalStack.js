import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const height = 240;

const data = [
  <Slide index={0} backgroundColor="red" />,
  <Slide index={1} backgroundColor="orange" />,
  <Slide index={2} backgroundColor="yellow" />,
  <Slide index={3} backgroundColor="green" />,
  <Slide index={4} backgroundColor="blue" />,
];

function SwipeableCarouselHorizontalStack() {
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <View style={{ height }}>
        <Carousel
          width={280}
          height={210}
          style={{
            width: "100%",
            height,
            alignItems: "center",
            justifyContent: "center",
          }}
          loop={false}
          mode="horizontal-stack"
          modeConfig={{
            stackInterval: 18,
          }}
          customConfig={() => ({ type: "positive" })}
          defaultScrollOffsetValue={scrollOffsetValue}
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

export default SwipeableCarouselHorizontalStack;
