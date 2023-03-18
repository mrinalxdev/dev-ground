import React from 'react'
import {HStack, Heading, Button, Box, Textarea} from '@chakra-ui/react'
import TextAreaAutosize from 'react-textarea-autosize'
import { useForm } from 'react-hook-form'
import { useAddPost } from '../../hooks/post'
import { useAuth } from '../../hooks/auth'

const Post = () => {

    const { register, handleSubmit, reset } = useForm()
    const { user, isLoading : authLoading } = useAuth()
    const { addPost, isLoading : addingPost } = useAddPost()

    const handlePost = (data) => {
        console.log(data)
        addPost({
            uid:user.id,
            text:data.text,
        })
    }

  return (
    <Box maxW='600px' mx='auto' py='10'>
        <form onSubmit={handleSubmit(handlePost)}>
            <HStack justify='space-between'>
                <Heading size='md'>
                    New Post
                </Heading>
                <Button type='submit' colorScheme='teal' isLoading={authLoading || addingPost}>
                    Post
                </Button>
            </HStack>
            <Textarea as={TextAreaAutosize} resize='none' mt='5' placeholder='Create a new Post'
            {...register('text', {required : true})}></Textarea>

            
        </form>
    </Box>
  )
}

export default Post