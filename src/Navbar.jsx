import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-900 text-white w-full fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a href="#home" className="text-lg font-semibold bg-green-600 px-4 py-2 rounded text-white no-underline">
            Ryan Purnomo
          </a>

          {/* Hamburger Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-black"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Dropdown (Mobile) */}
        <div className={`w-full bg-gray-800 text-center transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
          <a href="#home" className="block px-4 py-2 hover:bg-gray-600 text-white no-underline">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600 text-white no-underline">About</a>
          <a href="#project" className="block px-4 py-2 hover:bg-gray-600 text-white no-underline">Project</a>
          <a href="#resume" className="block px-4 py-2 hover:bg-gray-600 text-white no-underline">Resume</a>
        </div>
      </div>

      {/* <div className="text-center mt-20 p-6">
        <h3 className="text-lg font-bold">Responsive Navbar</h3>
        <p className="mt-2 text-sm">This example demonstrates how a navigation menu can adapt to different devices.</p>
        <p className="mt-1 text-sm">Click on the hamburger menu (☰) in the top right corner to toggle the menu.</p>
      </div> */}
    </>
  );
}

export default Navbar;
