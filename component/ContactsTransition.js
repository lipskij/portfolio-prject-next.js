import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    opacity: 1,
    left: 10,
  },
  animate: {
    opacity: 0,
    scale: 0,
    left: 0,
    height: 0,
    transition: {
      duration: 2,
      delay: 2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const imageOne = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const imageTwo = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 2,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const ContactsTransition = () => {
  return (
    <motion.div
      className='box-trans'
      initial='initial'
      animate='animate'
      variants={blackBox}
    >
      <motion.img src='/giphy.gif' alt='clappbord' variants={imageOne} />
      <motion.img src='/ACTION!.png' alt='action' variants={imageTwo} />
    </motion.div>
  );
};

export default ContactsTransition;
