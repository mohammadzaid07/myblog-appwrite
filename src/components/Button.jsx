import React from 'react'

export default function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-950',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg cursor-pointer  ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}