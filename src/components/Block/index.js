import React from 'react';
import getAnimatedImage from '../../utils/getAnimatedImage';

export default function Block({ num }) {
  const { blockStyle } = style;
  return (
    <div
      style={{
        ...blockStyle,
        background: getAnimatedImage(num),
      }}
    >
    </div>
  );
};


const style = {
  blockStyle: {
    height: 110,
    width: 110,
    background: "aquamarine",
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "800",
    color: "white",
  },

};

