import React from 'react';
import GalleryTwo from './GalleryTwo';

const FetchData = [
  {
    url: 'https://picsum.photos/300/400',
  },
  {
    url: 'https://picsum.photos/500',
  },
  {
    url: 'https://picsum.photos/300',
  },
  {
    url: 'https://picsum.photos/400',
  },
  {
    url: 'https://picsum.photos/600',
  },{
    url: 'https://picsum.photos/700',
  },
];

function Gal() {
  return (
    <div className="try">
      {FetchData.map(({ url }) => (
        <GalleryTwo
          url={url}
          key={url}
        />
      ))}
      <style jsx>{`
        .try {
          transform: scale(1);
          line-height: 4;
          column-count: 3;
          column-gap: 0px;
        }
        @media screen and (max-width: 680px) {
          .try {
            line-height: 2;
            column-count: 2;
            column-gap: 0px;
          }
        }
      `}</style>
    </div>
  );
}

export default Gal;
