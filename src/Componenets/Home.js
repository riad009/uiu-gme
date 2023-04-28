import React from 'react';

import robot from '../lottie/lottie-green.json'
import Lottie from "lottie-react"
const Home = () => {
    return (
        <div>
               <div className="p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-blue-500">Gaming Site</h1>
        <nav className="flex space-x-6">
        <div className='w-40'>
   <Lottie animationData={robot}/>
   </div>       </nav>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-blue-500 mb-4">Game 1</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar ultricies nunc sed aliquet.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-blue-500 mb-4">Game 2</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar ultricies nunc sed aliquet.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-blue-500 mb-4">Game 3</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar ultricies nunc sed aliquet.</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;