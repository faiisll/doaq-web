import React, {useState} from 'react'

export default function InputField({className, ...props}) {
    const [value, setValue] = useState("");
    return <input value={value} onChange={(e) => setValue(e.target.value)} {...props} className={`p-5 w-full border focus:border-blue-700 focus:outline-none bg-white shadow-md rounded-xl ${className}`} />
}
