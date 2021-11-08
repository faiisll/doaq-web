import React from 'react'
import i404 from '../../assets/images/404.svg';
import i500 from '../../assets/images/500.svg';

export default function Empty({text, type}) {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <img src={type === 404 ? i404 : i500} />
            <p>{text}</p>
        </div>
    )
}
