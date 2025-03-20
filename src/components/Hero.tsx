import { useEffect, useState } from "react";
import useScreenWindowSize from "../useScreenWindowSize";

const Hero = () => {
  const { width } = useScreenWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  const vidSrc = isMobile
    ? "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/hero-fold/hero-fold-mobile.mp4?tr=q-95"
    : "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95";

  //The Cred website does not reload the video if width is changed,
  //following same behaviour here, which is why no width in dependency.
  useEffect(() => {
    setIsMobile(width <= 768);
  }, []);

  return (
    <div className="h-full left-0 top-0 w-full z-0">
      <video
        style={{ position: "initial", visibility: "visible" }}
        playsInline
        src={vidSrc}
        autoPlay
        muted
        className="h-full block object-cover w-full"
      />
    </div>
  );
};

export default Hero;
