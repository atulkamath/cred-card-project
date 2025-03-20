import { Pointer } from "lucide-react";

export const carouselData = [
  {
    id: 1,
    source:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/swipe.mp4?tr=q-95",
    desc: (
      <div className="flex space-x-2">
        <Pointer size={40} />
        <p className="font-bold">
          <span className="whitespace-nowrap"></span>
          SWIPE LEFT
          <span className="font-normal ml-1">
            on any card to manage payment, card offers, and more.
          </span>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    source:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/long-press.mp4?tr=q-95",
    desc: (
      <div className="flex space-x-2">
        <Pointer size={40} />
        <p className="font-bold">
          Press and hold
          <span className="font-normal ml-1">
            on any card to manage payment, card offers, and more.
          </span>
        </p>
      </div>
    ),
  },
  {
    id: 3,
    source:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/smart-nav.mp4?tr=q-95",
    desc: (
      <div className="flex space-x-2">
        <Pointer size={40} />
        <p className="font-bold">
          Smart navigation
          <span className="font-normal ml-1">
            on any card to manage payment, card offers, and more.
          </span>
        </p>
      </div>
    ),
  },
];
