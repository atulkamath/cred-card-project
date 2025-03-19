import { useEffect, useState } from "react";
import useScreenWindowSize from "../useScreenWindowSize";

const Hero = () => {
  const { width } = useScreenWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  //The Cred website does not reload the video if width is changed, following same behaviour here, which is why no width in dependency.
  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="h-full left-0 absolute top-0 w-full z-0 box-border">
      <video
        style={{ position: "initial", visibility: "visible" }}
        playsInline
        src={
          isMobile
            ? "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/hero-fold/hero-fold-mobile.mp4?tr=q-95"
            : "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95"
        }
        autoPlay
        muted
        className="h-full block object-cover w-full box-border"
      />
    </div>
  );
};

export default Hero;
