import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDoa, sortDetail} from "./doaSlice";
import {motion} from "framer-motion";
import "./doa.css";
import Loading from "../../components/loading/Loading";
import PageAnimate from "../../components/page-animate/PageAnimate";

const itemVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  in: (custom) => ({
    opacity: 1,
    transition: {delay: custom * 0.5},
    y: 0,
  }),
  out: (custom) => ({
    opacity: 0,
    y: 50,
  }),
};

export default function Doa() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.doa);

  useEffect(async () => {
    await dispatch(getDoa({id}));
    dispatch(sortDetail());
  }, []);
  return (
    <PageAnimate className="w-full">
      <div className="w-full flex justify-center pb-10">
        <motion.div className="md:w-4/5 w-full rounded-xl bg-white shadow-md p-10">
          <h1 className="text-purple-600 text-2xl font-light">
            {!loading ? (
              data.doa.judul
            ) : (
              <Loading w="w-1/4" h="h-14" count={1} />
            )}
          </h1>
          <hr className="my-4" />

          <div className="w-full">
            {!loading ? (
              data.detail.map((d, index) => (
                <motion.div
                  variants={itemVariants}
                  custom={index}
                  initial="initial"
                  animate="in"
                  exit="out"
                  className="py-10"
                >
                  <h1 className="arabic mb-10 text-purple-800">{d.arab}</h1>
                  <p className="mb-4 text-green-700">{d.latin}</p>
                  <p className="text-gray-600">{d.arti}</p>
                </motion.div>
              ))
            ) : (
              <div>
                <Loading w="w-full" h="h-20" count={2} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </PageAnimate>
  );
}
