import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import DoaItem from "../../components/doa-item/DoaItem";
import {useDispatch, useSelector} from "react-redux";
import {getDoas, sortDoa} from "./categorySlice";
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
      transition: { delay: custom * 0.1 },
      y: 0,
    }),
    out: (custom) => ({
      opacity: 0,
      y: 50,
    }),
  };

export default function Category() {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.category);
  let {id} = useParams();

  useEffect(async () => {
    await dispatch(getDoas({id}));
    dispatch(sortDoa());
  }, []);
  return (
    <PageAnimate className="w-full">
      <div className="w-full text-center py-10">
        <h1 className="text-2xl font-thin text-purple-600">
          {!loading ? data.cateogory.nama : ""}
        </h1>
      </div>
      <div className="w-full flex flex-wrap">
        {!loading ? (
          data.doa.map((d, index) => (
            <motion.div variants={itemVariants}
              custom={index}
              initial="initial"
              animate="in"
              exit="out"
              className="md:w-1/4 w-full p-4">
              <DoaItem data={{id: d.id, title: d.judul}} />
            </motion.div>
          ))
        ) : ( <Loading w="w-1/4" h="h-24" count={8} />)}
      </div>
    </PageAnimate>
  );
}
