import React from "react";
import { Path, G, Svg } from "react-native-svg";

function SearchIcon({width, height, fill, style}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100" {...style}>
        <G>
          <Path fill={fill} d="M90.829 85.172L68.128 62.471A35.846 35.846 0 0076 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0088 92a4 4 0 002.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"></Path>
        </G>
    </Svg>
  );
}

export default SearchIcon;