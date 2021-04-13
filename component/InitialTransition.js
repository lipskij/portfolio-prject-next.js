import React from "react";
import { motion } from "framer-motion";
import useIntro from "../component/TransitionHook";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      delay: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  const showAnimation = useIntro();
  return (
    <motion.div
      className='box'
      initial='initial'
      animate={showAnimation ? "animate" : { display: 'none' }}
      variants={blackBox}
    >
      <motion.svg
        width='750'
        height='57'
        viewBox='0 0 750 57'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          d='M50.7914 41V16.232H65.6954V20.876H56.3714V26.168H64.3634V30.812H56.3714V36.356H65.6954V41H50.7914Z'
          fill='#86d7e5'
          opacity={0}
          animate={{ x: 275, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d='M273.125 41L271.865 36.032H264.557L263.369 41H257.753L264.377 16.232H272.225L278.813 41H273.125ZM268.301 21.272H268.085L265.673 31.424H270.749L268.301 21.272Z'
          fill='#86d7e5'
          opacity={0}
          animate={{ x: 90, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d='M481.975 41.288C478.975 41.288 476.323 41.084 474.019 40.676V36.284C476.995 36.524 479.107 36.644 480.355 36.644C481.339 36.644 482.107 36.596 482.659 36.5C483.211 36.404 483.607 36.236 483.847 35.996C484.063 35.78 484.195 35.516 484.243 35.204C484.315 34.892 484.351 34.448 484.351 33.872C484.351 33.104 484.303 32.564 484.207 32.252C484.111 31.916 483.907 31.676 483.595 31.532C483.307 31.388 482.803 31.256 482.083 31.136L478.087 30.56C476.263 30.296 475.027 29.588 474.379 28.436C473.731 27.284 473.407 25.628 473.407 23.468C473.407 21.38 473.755 19.784 474.451 18.68C475.147 17.576 476.095 16.844 477.295 16.484C478.495 16.124 480.019 15.944 481.867 15.944C484.147 15.944 486.487 16.184 488.887 16.664V20.984C486.727 20.72 484.807 20.588 483.127 20.588C481.351 20.588 480.211 20.756 479.707 21.092C479.419 21.26 479.239 21.5 479.167 21.812C479.095 22.1 479.059 22.556 479.059 23.18C479.059 23.876 479.095 24.368 479.167 24.656C479.239 24.944 479.395 25.16 479.635 25.304C479.899 25.424 480.343 25.532 480.967 25.628L485.251 26.24C486.211 26.384 487.003 26.624 487.627 26.96C488.275 27.296 488.803 27.872 489.211 28.688C489.715 29.744 489.967 31.256 489.967 33.224C489.967 35.528 489.643 37.268 488.995 38.444C488.347 39.62 487.459 40.388 486.331 40.748C485.227 41.108 483.775 41.288 481.975 41.288Z'
          fill='#86d7e5'
          opacity={0}
          animate={{ x: -100, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d='M686.222 41V32.468L679.094 16.232H684.854L688.994 26.78H689.282L693.314 16.232H698.93L691.838 32.468V41H686.222Z'
          fill='#86d7e5'
          opacity={0}
          animate={{ x: -284, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition;
