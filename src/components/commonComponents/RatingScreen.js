import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { Colors, SH } from "../../utils";

function RatingScreen(props) {
  return (
    <Rating
      type='custom'
      ratingColor={Colors.gunmetal_yellow}
      ratingBackgroundColor={Colors.gray_text_color}
      ratingCount={5}
      tintColor={Colors.bg_white}
      imageSize={SH(25)}
      startingValue={4.5}
      isDisabled={false}
      style={{ paddingVertical: SH(10) }}
    />
  );
};
export default RatingScreen;