import React from 'react'

function Btn({title, className, onClick}) {
  return (
    <div>
        <button onClick={onClick} className={className}>{title}</button>
    </div>
  )
}

export default Btn