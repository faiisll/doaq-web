import {motion} from "framer-motion";
import React from "react";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function PageAnimate({children, ...props}) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
