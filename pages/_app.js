import "../styles/globals.css";
import { ThemeProvider } from "../component/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              // filter: [
              //   "hue-rotate(0) contrast(100%)",
              //   "hue-rotate(360deg) contrast(200%)",
              //   "hue-rotate(45deg) contrast(300%)",
              //   "hue-rotate(0) contrast(100%)",
              // ],
            },
            pageExit: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              filter: `invert()`,
              opacity: 0,
              // rotate: [0, 5, -5, 0],
              // transition: {
              //   duration: .3
              // }
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
