import React from "react";
import {Link} from "react-router-dom";

export default function DoaItem({data}) {
  return (
    <Link to={"/doa/" + data.id}>
      <div className="w-full border h-24 flex items-center hover:border-purple-600 transition-all p-4 bg-white shadow-md rounded-xl">
        <p className="text-base text-gray-600">
            {data.title}

        </p>
      </div>
    </Link>
  );
}
