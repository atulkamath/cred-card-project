import { useEffect, useState } from "react";
import useScreenWindowSize from "../useScreenWindowSize";

const HeroContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useScreenWindowSize();

  //The Cred website does not reload the video if width is changed,
  //following same behaviour here, which is why no width in dependency.
  useEffect(() => {
    setIsMobile(width <= 768);
  }, []);

  const vidSrc1 = isMobile
    ? "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/multi-card/multi-card-mobile-video.mp4?tr=q-95"
    : "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95";

  const vidSrc2 = isMobile
    ? "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/single-card/single-card-fold-mobile.mp4?tr=q-95"
    : "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95";

  return (
    <div>
      <div className="flex flex-col items-center mt-20 text-center p-12 w-full">
        <p className="uppercase text-stone-500 sm:tracking-wider lg:tracking-wide text-sm sm:text-lg lg:text-2xl">
          Credit Card Management. Reimagined.
        </p>

        <p className="font-extrabold text-[2.5rem] leading-12 font-serif mt-5 whitespace-pre-wrap sm:text-6xl lg:max-w-1/3 lg:leading-14 sm:my-8">
          everything you need. nothing you don't.
        </p>
        <p className="text-stone-500 tracking-wide text-sm leading-8 mt-5 max-w-3xl sm:text-lg sm:max-w-3/4 lg:text-xl lg:leading-8">
          welcome to a credit card experience designed to feel like second
          nature. like muscle memory. life's logistics demand enough of your
          time, effort, and attention— managing your credit cards shouldn't add
          to the list.
        </p>
      </div>
      <video
        playsInline
        src={vidSrc1}
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
      <video
        playsInline
        src={vidSrc2}
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroContent;
