import { useEffect } from "react";
import styled from 'styled-components';

import img2 from './Images/2.gif';
import img4 from './Images/4.gif';
import img8 from './Images/8.gif';
import img16 from './Images/16.gif';
import img32 from './Images/32.gif';
import img64 from './Images/64.gif';
import img128 from './Images/128.gif';
import img256 from './Images/256.gif';
import img512 from './Images/512.gif';
import img1024 from './Images/1024.gif';
import img2048 from './Images/2048.gif';
import imgbackground from './Images/tileBackground.jpeg';

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
      return "url(" + img2 + ")";
    case 4:
      return "url(" + img4 + ")";
    case 8:
      return "url(" + img8 + ")";
    case 16:
      return "url(" + img16 + ")";
    case 32:
      return "url(" + img32 + ")";
    case 64:
      return "url(" + img64 + ")";
    case 128:
      return "url(" + img128 + ")";
    case 256:
      return "url(" + img256 + ")";
    case 512:
      return "url(" + img512 + ")";
    case 1024:
      return "url(" + img1024 + ")";
    case 2048:
      return "url(" + img2048 + ")";
    default:
      return "url(" + imgbackground + ")";
  }
};
