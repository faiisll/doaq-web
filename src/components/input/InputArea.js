import React, {useState} from 'react'

export default function InputArea({children, className ,...props}) {
    const [value, setValue] = useState(children);
    return (
        <textarea {...props} className={`p-5 w-full border focus:border-blue-700 focus:outline-none bg-white shadow-md rounded-xl ${className}`}>
            {value}
        </textarea>
    )
}
