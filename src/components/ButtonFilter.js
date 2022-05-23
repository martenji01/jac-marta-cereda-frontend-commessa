import React from 'react'

const ButtonFilter = ({title, callback}) => {
  return (
    <>
        <button className={'buttonFilter ' + title} onClick={()=>callback(title)}>{title}</button>
    </>
  )
}

export default ButtonFilter