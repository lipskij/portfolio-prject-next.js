import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { FaRegWindowClose } from "react-icons/fa";
import styles from "../styles/gallery.module.css";

const OpenModal = ({ setIsOpen, url, urlWebp, isOpen, portalContainer }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className='isOpen'>
          <FaRegWindowClose
            className={styles.closeBtn}
            onClick={() => setIsOpen(!isOpen)}
          />
          <style jsx>{`
            .gallery {
              margin: 0 auto;
              display: flex;
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
              max-height: 100vh;
            }
            .gallery img {
              width: auto;
              height: 90vh;
              padding-top: 3rem;
              margin: 0 auto;
            }
            .gallery-image {
              width: 100%;
              height: auto;
              margin: 0;
            }
            .img-btn {
              cursor: pointer;
              border: none;
              outline: none;
              background-color: rgba(0, 0, 0, 0);
              display: flex;
            }
            @media screen and (max-width: 480px) {
              .gallery {
                margin: 0 0.3rem;
              }
              .gallery img {
                width: 95vw;
                height: auto;
              }
              .gallery-image {
                width: 100%;
                height: auto;
              }
              .img-btn {
                margin: 0 auto;
                padding: 0;
              }
            }
          `}</style>

          <div className='gallery'>
            <figure className='gallery-image'>
              <button className='img-btn'>
                <picture>
                  <source srcSet={url} />
                  <img
                    src={urlWebp}
                    className='img'
                    alt='Image'
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </picture>
              </button>
            </figure>
          </div>
        </div>,
        portalContainer.current
      )
    : null;
};

const Item = ({ url, urlWebp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const portalContainer = useRef(null);

  useEffect(() => {
    portalContainer.current = document.getElementById("image-modal");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const content = (
    <div>
      <style jsx>{`
        .gallery {
          margin: 0;
        }
        .gallery img {
          width: 95%;
          transition: all 0.3s;
          opacity: 0.8;
        }
        .gallery img:hover {
          opacity: 1;
        }
        .gallery-image {
          width: 100%;
          height: auto;
          margin: 0 auto;
          padding: 0;
        }
        .img-btn {
          cursor: pointer;
          border: none;
          outline: none;
          background-color: transparent;
          padding: 0;
        }
        @media screen and (max-width: 480px) {
          .gallery {
            margin: 0 auto;
          }
          .gallery img {
            box-shadow: 8px 8px 8px var(--nav-color);
          }
        }
      `}</style>
      <div className='gallery'>
        <figure className='gallery-image'>
          <button className='img-btn'>
            <picture>
              <source srcSet={url} />
              <img
                src={urlWebp}
                className='img'
                alt='Image'
                onClick={() => setIsOpen(!isOpen)}
              />
            </picture>
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
            urlWebp={urlWebp}
            setIsOpen={setIsOpen}
            portalContainer={portalContainer}
            key='modal'
          />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
