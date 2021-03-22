import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    opacity: 1,
  },
  animate: {
    opacity: 0,
    height: 0,
    scale: 0,
    transition: {
      duration: 2,
      delay: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const photoOne = {
  initial: {
    opacity: 1,
    width: "30%",
  },
  animate: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
};

const photoTwo = {
  initial: {
    opacity: 1,
    width: "30%",
  },
  animate: {
    opacity: 0,
    y: 600,
    transition: {
      duration: 1,
      delay: 0.5,
      when: "afterChildren",
    },
  },
};

const photoThree = {
  initial: {
    opacity: 1,
    width: "30%",
  },
  animate: {
    opacity: 0,
    y: -600,
    transition: {
      duration: 1,
      delay: 1,
      when: "afterChildren",
    },
  },
};

const PageTransition = () => {
  return (
    <motion.div
      className='box-trans'
      initial='initial'
      animate='animate'
      variants={blackBox}
    >
      <motion.img src='/bike-img1.jpg' alt='bike' variants={photoOne} />
      <motion.img src='/bike-img2.jpg' alt='bike' variants={photoTwo} />
      <motion.img src='/bike-img4.jpg' alt='bike' variants={photoThree} />
    </motion.div>
  );
};

export default PageTransition;
