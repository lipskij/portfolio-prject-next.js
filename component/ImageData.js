import React from "react";
import GalleryTwo from "./GalleryTwo";

const FetchData = [
  {
    url: "/photo.jpg",
  },
  {
    url: "/photo7.jpg",
  },
  {
    url: "/photo3.jpg",
  },
  {
    url: "/photo4.jpg",
  },
  {
    url: "/photo5.jpg",
  },
  {
    url: "/photo6.jpg",
  },
  {
    url: "/photo2.jpg",
  },
];

function Gal() {
  return (
    <div className="try">
      {FetchData.map(({ url }) => (
        <GalleryTwo url={url} key={url} />
      ))}
      <style jsx>{`
        .try {
          transform: scale(1);
          line-height: 7;
          column-count: 3;
          column-gap: 0px;
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
