import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-md">
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="font-bold text-xl text-gray-900 tracking-tight font-pretendard">포트폴리오</div>
        <ul className="flex gap-8 text-base font-medium text-gray-700">
          <li><a href="#about" className="hover:text-gray-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-gray-600 transition">Work</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 