import React from 'react'
import Post from './Post'
import Todo from './Todo'


const Dashboard = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 m-auto mr-3 ml-3  h-auto">
        <div className=" row-span-5 mt-[80px] col-span-5 ">
          <Post />
        </div>
        <div className="col-span-1 mt-[200px] border border-white h-[250px]">
          <Todo />
        </div>
        <div className="row-span-2 col-span-1 border border-white h-[200px]">
          <h1>Add New Project Section</h1>
        </div>
    </div>

  )
}

export default Dashboard