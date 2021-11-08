import React, {useState} from 'react'

export default function InputField(props) {
    const [value, setValue] = useState("");
    return <input value={value} onChange={(e) => setValue(e.target.value)} {...props} className={`p-5 border-2 focus:border-blue-700 focus:outline-none bg-white shadow-md rounded-xl ${props.className}`} />
}
