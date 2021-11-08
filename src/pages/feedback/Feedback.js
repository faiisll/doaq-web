import React from "react";
import InputField from "../../components/input/InputField";
import PageAnimate from "../../components/page-animate/PageAnimate";

export default function Feedback() {
  return (
    <PageAnimate className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-1/2 bg-white p-10 rounded-xl shadow-md">
          <InputField type="text" placeholder="Email" className="" />
        </div>
      </div>
    </PageAnimate>
  );
}
