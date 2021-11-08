import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import DoaItem from "../../components/doa-item/DoaItem";
import Loading from "../../components/loading/Loading";
import {getAllDoas} from "../home/homeSlice";
import PageAnimate from "../../components/page-animate/PageAnimate";

const itemVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  in: (custom) => ({
    opacity: 1,
    transition: {delay: custom * 0.05},
    y: 0,
  }),
  out: (custom) => ({
    opacity: 0,
    y: 50,
  }),
};

export default function SearchPage() {
  const {doas, loading} = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!doas.length) {
      dispatch(getAllDoas());
    }
  }, []);
  return (
    <PageAnimate>
      <div className="w-full flex flex-wrap">
        {!loading ? (
          doas.map((d, index) => (
            <motion.div
              variants={itemVariants}
              custom={index}
              initial="initial"
              animate="in"
              exit="out"
              className="md:w-1/4 w-full p-4"
            >
              <DoaItem data={{id: d.id, title: d.judul}} />
            </motion.div>
          ))
        ) : (
          <Loading w="w-1/4" h="h-24" count={8} />
        )}
      </div>
    </PageAnimate>
  );
}
