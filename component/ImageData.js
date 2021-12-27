import React from "react";
import GalleryTwo from "./GalleryTwo";

const FetchData = [
  {
    url: "/photo.jpg",
    urlWebp: "/photo.webp",
  },
  {
    url: "/photo7.jpg",
    urlWebp: "/photo7.webp",
  },
  {
    url: "/photo3.jpg",
    urlWebp: "/photo3.webp",
  },
  {
    url: "/photo4.jpg",
    urlWebp: "/photo4.webp",
  },
  {
    url: "/photo6.jpg",
    urlWebp: "/photo6.webp",
  },
  {
    url: "/photo2.jpg",
    urlWebp: "/photo2.webp",
  },
  {
    url: "/bike-img1-min.png",
    urlWebp: "/bike-img1-min.webp",
  },
  {
    url: "/bike-img2-min.png",
    urlWebp: "/bike-img2-min.webp",
  },
  {
    url: "/bike-img3-min.png",
    urlWebp: "/bike-img3-min.webp",
  },
  {
    url: "/bike-img4-min.png",
    urlWebp: "/bike-img4-min.webp",
  },
];

function Gal() {
  return (
    <div className='try'>
      {FetchData.map(({ url, urlWebp }) => (
        <GalleryTwo url={url} key={url} urlWebp={urlWebp} />
      ))}
      <style jsx>{`
        .try {
          transform: scale(1);
          line-height: 5;
          column-count: 3;
          padding: 3rem 3rem;
          gap: 0;
        }
        @media screen and (max-width: 480px) {
          .try {
            line-height: 2;
            column-count: 1;
            column-gap: 0px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

export default Gal;
