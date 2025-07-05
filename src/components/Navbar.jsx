import React from 'react';

const Navbar = () => {
  return (
    // navbar edits here
    <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-wide">
          iTask
        </div>

        <ul className="flex space-x-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-indigo-400 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-indigo-400 transition-colors">Your Task</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
