import React from "react";
import { ShareProps } from "./types";
import { BsWhatsapp, BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs";

export const Share: React.FC<ShareProps> = ({ text }) => {
  const url = window.location.href;
  return (
    <div className="flex items-center space-x-4">
      <div className="text-white font-medium text-base md:text-xl">
        Share this article:
      </div>
      <a href={`https://t.me/share/url?url=${url}&text=${text}`}>
        <BsTelegram size="28px" color="#1D6434" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        <BsFacebook size="28px" color="#1D6434" />
      </a>
      <a href={`whatsapp://send?text=${url} ${text}`}>
        <BsWhatsapp size="28px" color="#1D6434" />
      </a>
      <a
        href={`http://twitter.com/share?text=${text}&url=${url}&hashtags=mc, neverstop, bikers, motorcycleclub`}
      >
        <BsTwitter size="28px" color="#1D6434" />
      </a>
    </div>
  );
};
