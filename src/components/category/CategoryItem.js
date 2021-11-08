import React from "react";
import {Link} from "react-router-dom";
import bg from '../../assets/images/bg.svg'
import useSound from 'use-sound';
import click from '../../assets/sounds/click.mp3';

export default function CategoryItem({data}) {
  const [play] = useSound(click);
  return (
    <Link to={"/category/"+data.id} >
      <div
        
        className="rounded-xl w-full transform hover:-translate-y-2 transition-all overflow-hidden relative"
        style={{backgroundColor: data.warna, }}
      >
        <div className="absolute w-full h-full opacity-5" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover' ,backgroundPosition: 'center'}}></div>
        <div className="w-full p-12">

        <h2 className="text-white font-bold text-lg">{data.nama}</h2>
        <small className="text-white">{data.total} Doa</small>
        </div>
      </div>
    </Link>
  );
}
