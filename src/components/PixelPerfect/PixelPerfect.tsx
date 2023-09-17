import styles from "./pixelperfect.module.css";
import mobileDark from '../../assets/images/design/mobile-design-dark.jpg';
import mobileLight from '../../assets/images/design/mobile-design-light.jpg';
import desktopDark from '../../assets/images/design/desktop-design-dark.jpg';
import desktopLight from '../../assets/images/design/desktop-design-light.jpg';
import { ReactElement, useState } from "react";

type ImgElement = {
  mobileDark: ReactElement,
  mobileLight: ReactElement,
  desktopDark: ReactElement,
  desktopLight: ReactElement;
}

function PixelPerfect() {
  const [isPixelPerfect, setPixelPerfect] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [imgMode, setImgMode] = useState('mobile');
  const imgs: ImgElement = {
    mobileDark: <img className={styles.image} src={mobileDark} alt="" />,
    mobileLight: <img className={styles.image} src={mobileLight} alt="" />,
    desktopDark: <img className={styles.image} src={desktopDark} alt="" />,
    desktopLight: <img className={styles.image} src={desktopLight} alt="" />,
  }

  const handlePixelPerfect = () => {
    setPixelPerfect(!isPixelPerfect);
  }

  const handleImgMode = () => {
    const mode = imgModeMap().get(imgMode);
    setImgMode(mode);
  }

  const handleIsLight = () => {
    setIsLight(!isLight);
  }

  const imgModeMap = () => {
    const imgModeMap = new Map();
    imgModeMap.set('mobile', 'desktop');
    imgModeMap.set('desktop', 'mobile');
    return imgModeMap
  }

  const getImgMode = () => {
    let suffix = "Dark";
    if (isLight) suffix = "Light";
    return imgMode + suffix;
  }

  return (
    <>
      {isPixelPerfect && imgs[getImgMode() as keyof ImgElement]}
      <div
        className={styles.buttons}
      >
        <button
          className={styles.btn}
          onClick={handlePixelPerfect}
        >PP</button>
        {isPixelPerfect && <button
          className={styles.btn}
          onClick={handleImgMode}
        >IMG</button>}
        {isPixelPerfect && <button
          className={styles.btn}
          onClick={handleIsLight}
        >{isLight ? 'D' : 'L'}</button>}
      </div>
    </>
  );
}

export default PixelPerfect;
