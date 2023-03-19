import React, {useState} from 'react'
import {Heading, Button} from '@chakra-ui/react'

const Todo = () => {
    const [inputText, setInputText] = useState('')
    const [listTodo, setListTodo] = useState([])

    const addList = (inputText) => {
        setListTodo({...listTodo, inputText})
    }
  return (
    <>
        <input type="text" placeholder='Add Your Project Todo' className='border rounded-lg pl-[30px] py-[10px]' onChange={e => {
            setInputText(e.target.value)
        }} />

        <Button colorScheme='teal' borderRadius='full' onCLick={() => {addList(inputText)}}>+</Button>
    </>
    
  )
}

export default Todo