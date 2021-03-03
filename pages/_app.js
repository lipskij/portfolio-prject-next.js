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
              transition: {
                duration: 0.3,
              },
            },
            pageExit: {
              backgroundColor: "#3d3d43",
              opacity: 0,
              // y: 300,
              transition: {
                duration: 0.3,
              },
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

// filter: [
//   "hue-rotate(0) contrast(100%)",
//   "hue-rotate(360deg) contrast(200%)",
//   "hue-rotate(45deg) contrast(300%)",
//   "hue-rotate(0) contrast(100%)",
// ],
// rotate: [0, 5, -5, 0],
// filter: `invert()`,
