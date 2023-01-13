import { useState } from "react";
import { AlbumCard, Heading } from "../../components";
import "./style.scss";

export const Gallery = () => {
  const images = [
    "https://c1.peakpx.com/wallpaper/218/94/384/cat-kitten-black-animal-pet-kitty-wallpaper.jpg",
    "https://forum.archlabslinux.com/uploads/default/optimized/2X/8/8c39bbe5a075944837ff782134ee415abb3b1a44_2_1380x776.jpeg",
    "https://1.bp.blogspot.com/-mKIdMWZR_-U/T3a3cR4Wp0I/AAAAAAAAGQc/kpyhXbnJ5BI/s1600/Capybara-02.JPG",
    "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2018/10/Linux-Beta.jpg",
    "https://static.haydenjames.io/wp-content/uploads/2017/05/Debian_18_05_2017_22_07_32.png",
  ];
  return (
    <div className="flex justify-around flex-col m-8 space-y-4">
      <Heading label="Check out our most popular galleries" />
      <div className="mt-12 md:mt-8 flex flex-col">
        <AlbumCard img={images} title={`Album number 1`} album_id={"wgwgrg"} />
        <AlbumCard img={images} title={`Album number 1`} album_id={"wgwgrg"} />
        <AlbumCard img={images} title={`Album number 1`} album_id={"wgwgrg"} />
        <AlbumCard img={images} title={`Album number 1`} album_id={"wgwgrg"} />
        <AlbumCard img={images} title={`Album number 1`} album_id={"wgwgrg"} />
      </div>
    </div>
  );
};
