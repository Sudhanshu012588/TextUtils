import React from 'react';
import '../App.css';

function NavBar(props) {
  return (
    <div className="w-full h-16 bg-gray-800 flex justify-between items-center px-8">
      <h1 className="text-white bg-gray-800 font-bold text-2xl">TextUtils</h1>
      

        
      <a
        href="https://github.com/Sudhanshu012588"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
      >
        My Github
      </a>
    </div>
  );
}

export default NavBar;
