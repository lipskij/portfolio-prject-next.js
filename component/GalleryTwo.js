import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const OpenModal = ({ setIsOpen, url, isOpen, portalContainer }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className="isOpen">
          <style jsx>{`
            .gallery {
              margin: 0 auto;
            }
            .isOpen {
              display: flex;
              align-items: center;
              justify-content: center;
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.5);
            }
            .gallery img {
              width: 100%;
              height: auto;
            }
            .gallery-image {
              width: 100%;
              height: auto;
            }
            .img-btn {
              cursor: pointer;
              border: none;
              outline: none;
              background-color: rgba(0, 0, 0, 0);
            }
            @media screen and (max-width: 480px) {
              .gallery {
                margin: 0 0.3rem;
              }
            }
          `}</style>
          <div className="gallery">
            <figure className="gallery-image">
              <button className="img-btn">
                <img
                  src={url}
                  className="img"
                  alt="Image"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </button>
            </figure>
          </div>
        </div>,
        portalContainer.current
      )
    : null;
};

const Item = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const portalContainer = useRef(null);

  useEffect(() => {
    portalContainer.current = document.getElementById("image-modal");
  }, []);

  const content = (
    <div>
      <style jsx>{`
        .gallery {
          margin: 0;
          padding-top: 1rem;
        }
        .gallery img {
          width: 200px;
          height: 200px;
          border-radius: 5px;
          transition: all 0.3s;
        }
        .gallery img:hover {
          transform: scale(1.05);
          box-shadow: 8px 8px 8px var(--nav-color);
        }
        .gallery-image {
          width: 200px;
          height: 200px;
        }
        .img-btn {
          cursor: pointer;
          border: none;
          outline: none;
          background-color: var(--background-color);
        }
        @media screen and (max-width: 480px) {
          .gallery {
            margin: 0 5px;
          }
        }
      `}</style>
      <div className="gallery">
        <figure className="gallery-image">
          <button className="img-btn">
            <img
              src={url}
              className="img"
              alt="Image"
              onClick={() => setIsOpen(!isOpen)}
            />
          </button>
        </figure>
      </div>
    </div>
  );

  return (
    <div>
      {content}
      <div>
        {isOpen ? (
          <OpenModal
            isOpen={isOpen}
            url={url}
            setIsOpen={setIsOpen}
            portalContainer={portalContainer}
            key="modal"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
