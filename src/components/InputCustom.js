import React from 'react'

const InputCustom = ({optionsList, typeInput}) => {
  return (
    <>
        <select className='inputSelect'>
            {
                optionsList!==undefined && optionsList.map((option)=>{
                    if(typeInput==="users")
                        return <option value={option.id}>{option.email}</option>
                    else
                        return <option value={option.id}>{option.acronym}</option>
                })
            }
        </select>
    </>
  )
}

export default InputCustom