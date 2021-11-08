import React from "react";
import InputArea from "../../components/input/InputArea";
import InputField from "../../components/input/InputField";
import PageAnimate from "../../components/page-animate/PageAnimate";
import { sendSaran } from "./feedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import {Check} from "react-feather";

export default function Feedback() {
  const dispatch = useDispatch();
  const {loading, success} = useSelector(state => state.feedback);

  function handleSubmit(e){
    e.preventDefault();
    dispatch(sendSaran({email: e.target.elements.email.value, saran: e.target.elements.saran.value}));

    // console.log(e.target.elements.saran.value);
  }
  return (
    <PageAnimate className="w-full py-10">
      <div className="w-full flex justify-center">
        <div className="md:w-1/2 w-full bg-white p-10 rounded-xl shadow-md">
          <div className="w-full pb-10 pt-5">
            <h1 className="text-2xl font-semibold mb-2">Give Feedback</h1>
            <p className="text-md font-light text-gray-500">Bantu kami mengembangkan Aplikasi Doa Q dengan memberikan masukkan dan saran</p>
          </div>
          <form onSubmit={handleSubmit}>
            <InputField required type="text" name="email" type="email" placeholder="Email" className="mb-4" />
            <InputArea required name="saran" className="mb-4" rows={5} placeholder="Masukkan Pesan di sini...">
              
            </InputArea>

            <button className="w-full flex justify-center text-center bg-purple-600 hover:bg-purple-800 text-white p-4 rounded-xl">
              {loading ? 
                (<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>) : "Send"
              }
            </button>
          </form>
        </div>
      </div>
    </PageAnimate>
  );
}
