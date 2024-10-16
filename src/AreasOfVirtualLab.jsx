import React from 'react';

function AreasOfVirtualLab() {
  return (
    <div className="flex flex-col  items-center h-screen p-4">
      <div className='w-full'><h1 className=' text-5xl font-bold text-center mb-14'>Areas for our virtual labs </h1></div>
      <div className=' h-screen w-full flex flex-wrap items-center justify-center gap-10 '>
        <div className=' h-64 w-5/12 border  flex items-center justify-center text-3xl font-bold  rounded-lg bg-blue-500'>
        Elctronics and Telecommunication
        </div>
        <div className=' h-64 w-5/12 border  flex items-center justify-center text-3xl font-bold  rounded-lg bg-blue-500'>
        Electrical 
        </div>
        <div className=' h-64 w-5/12 border  flex items-center justify-center text-3xl font-bold  rounded-lg bg-blue-500'>
        Civil
        </div>
        <div className=' h-64 w-5/12 border  flex items-center justify-center text-3xl font-bold  rounded-lg bg-blue-500'>
        Mechanical
        </div>
      </div>

    </div>
  );
}

export default AreasOfVirtualLab;