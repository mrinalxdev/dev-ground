import React from 'react'
import { Box } from '@chakra-ui/react'
import Post from './addPost'

const Postlist = ({posts}) => {
  return (
    <Box px='4'>
      {posts?.length===0 
      ? ('no posts') : 
      posts?.map(post => <Post key={post.id} post={post}/>)}
    </Box>
  )
}

export default Postlist