import React from 'react'

export default function Objectives() {
  return (
    <div className='h-screen w-full '>
      <div className=' rounded-lg h-full w-full bg-blue-500 flex flex-col gap-5 items-center justify-center text-black text-center '>
      <div className="flex flex-col justify-center items-center w-2/4 p-4">
        <h1 className="text-5xl font-bold text-black ">Objectives</h1>
      </div>
      <div className=' flex justify-start'>
      {/* Right Section */}
      <div className="flex flex-col items-start w-2/4 p-4">
        <ul className="pl-6 mt-4 text-lg list-none text-start" >
        <li>
            <h2 className='font-bold'>Simulate Real-World Experiments:</h2>
            Provide a virtual environment to simulate experiments that are otherwise difficult, expensive, or dangerous to perform in real labs.
          </li>
          <li>
            <h2 className='font-bold'>Hands-On Learning:</h2>
            Allow students to interact with experiments, encouraging active participation and enhancing the learning experience.
          </li>
          <li>
            <h2 className='font-bold'>Accessible Anytime, Anywhere:</h2>
            Make science and engineering experiments accessible to users from any location, at any time, without the need for physical resources.
          </li>
          <li>
            <h2 className='font-bold'>Cost-Effective Education:</h2>
            Reduce the costs of purchasing physical equipment and materials for educational institutions by offering virtual simulations that replicate real lab setups.
          </li>
          <li>
            <h2 className='font-bold'>Safe Experimentation:</h2>
            Enable students to perform potentially hazardous experiments in a safe, controlled virtual environment, reducing the risk of accidents or injuries.
          </li>
        </ul>
      </div>
      <div className="flex flex-col  w-2/4 p-4">
        <ul className="pl-6 mt-4 text-lg list-none text-start  " >
          <li>
            <h2 className='font-bold'>Interactive Learning:</h2>
            Encourage a deeper understanding of concepts through interactive simulations where users can manipulate variables and observe outcomes in real-time.
          </li>
          <li>
            <h2 className='font-bold'>Enhance Concept Understanding:</h2>
            Help users better understand theoretical concepts by providing practical, hands-on simulations of those concepts.
          </li>
          <li>
            <h2 className='font-bold'>Instant Feedback:</h2>
            Provide immediate feedback or results based on the experiment conducted, allowing users to learn from mistakes and adjust their approach in real-time.
          </li>
          <li>
            <h2 className='font-bold'>Support for Multiple Disciplines:</h2>
            Offer a wide range of subjects such as physics, chemistry, biology, and engineering, allowing students to experience experiments across various fields of study.
          </li>
          <li>
            <h2 className='font-bold'>Data Collection and Analysis:</h2>
            Allow users to collect data during simulations, analyze the results, and interpret the data just like in a real lab environment.
          </li>
        </ul>
      </div>
</div>
      </div>
    </div>
  )
}
