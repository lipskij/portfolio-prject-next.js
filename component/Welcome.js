import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.9,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <motion.div
      className='box'
      initial='initial'
      animate='animate'
      variants={blackBox}
    >
      <motion.svg variants={textContainer}>
        <pattern
          id='pattern'
          patternUnits='userSpaceOnUse'
          width={750}
          height={800}
          className='text-white'
        >
          <rect />
          <motion.rect variants={text} className='welcome-text' />
        </pattern>
        <text
          className='container-text'
          x='50%'
          y='50%'
          style={{ fill: "url(#pattern)", width: '100vw', margin: 0 }}
        >
          brand
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition;
