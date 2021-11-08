import React from "react";
import {motion} from "framer-motion";

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

export default function Loading({w, h, count}) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      class="flex animate-pulse flex-row items-center w-full justify-center space-x-5"
    >
      <div class="flex w-full flex-wrap">
        {[...Array(count)].map((c) => (
          <div className={`md:${w} w-full ${h} p-4`}>
            <div className={`w-full bg-gray-300 h-full rounded-md`}></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
