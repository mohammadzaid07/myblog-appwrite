import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full text-left'>
            {label && <label
                className='inline-block mb-1 pl-3'
                htmlFor={id}>
                {label}
            </label>}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 duration-200 border border-gray-400 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input