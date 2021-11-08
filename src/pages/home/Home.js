import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CategoryItem from "../../components/category/CategoryItem";
import {getAllDoas, getCategories} from "./homeSlice";
import Loading from "../../components/loading/Loading";
import {motion} from "framer-motion";
import PageAnimate from "../../components/page-animate/PageAnimate";

const itemVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  in: (custom) => ({
    opacity: 1,
    transition: {delay: custom * 0.2},
    y: 0,
  }),
  out: (custom) => ({
    opacity: 0,
    y: 50,
  }),
};

export default function Home() {
  const dispatch = useDispatch();
  const {categories, loading, doas} = useSelector((state) => state.home);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  useEffect(() => {
    if (!doas.length) {
      dispatch(getAllDoas());
    }
  }, []);

  return (
    <PageAnimate className="w-full">
      <div className="w-full p-4 py-10">
        <h1 className="text-2xl font-thin text-purple-600">Kategori Doa</h1>
      </div>
      <div className="w-full flex flex-wrap">
        {loading ? (
          <Loading count={6} w="w-1/3" h="h-40" />
        ) : (
          categories.map((cat, index) => (
            <motion.div
              variants={itemVariants}
              custom={index}
              initial="initial"
              animate="in"
              exit="out"
              className="md:w-1/3 w-full p-4 "
              key={cat.id}
            >
              <CategoryItem data={cat} />
            </motion.div>
          ))
        )}
      </div>

    </PageAnimate>
  );
}
