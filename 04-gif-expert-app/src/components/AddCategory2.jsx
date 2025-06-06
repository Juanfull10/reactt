import React, { useState } from 'react'

export const AddCategory2 = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange=({target})=>{
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        // setCategories(categories=>[inputValue,...categories])
        onNewCategory(inputValue.trim())
         setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text"
            placeholder='buscar gifs'
            value={inputValue}
            onChange={onInputChange}
            />
    </form>
  
  )
}
