import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 m-auto mr-3 ml-3 mt-4 h-auto">
      <div className=" row-span-5 col-span-5 border border-white">
        <h1>Post Section</h1>
      </div>
      <div className="col-span-1 border border-white h-[200px]">
        <h1>Todo Section</h1>
      </div>
      <div className="row-span-2 col-span-1 border border-white h-[200px]">
        <h1>Add New Project Section</h1>
      </div>
    </div>
  )
}

export default Dashboard