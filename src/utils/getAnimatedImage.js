import img2 from '../images/2.gif';
import img4 from '../images/4.gif';
import img8 from '../images/8.gif';
import img16 from '../images/16.gif';
import img32 from '../images/32.gif';
import img64 from '../images/64.gif';
import img128 from '../images/128.gif';
import img256 from '../images/256.gif';
import img512 from '../images/512.gif';
import img1024 from '../images/1024.gif';
import img2048 from '../images/2048.gif';
import imgbackground from '../images/tileBackground.jpeg';

const getAnimatedImage = (num) => {
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
}
export default getAnimatedImage;
