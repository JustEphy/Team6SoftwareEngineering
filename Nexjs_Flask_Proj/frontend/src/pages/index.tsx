import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Menu */}
      <nav className="bg-blue-600 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/userinterface" className="text-white hover:underline">
              Project 1
            </Link>
          </li>
          <li>
            <Link href="/project2" className="text-white hover:underline">
              Project 2
            </Link>
          </li>
          <li>
            <Link href="/project3" className="text-white hover:underline">
              Project 3
            </Link>
          </li>
          <li>
            <Link href="/project4" className="text-white hover:underline">
              Project 4
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the group 6 project page</h1>
      </div>
    </div>
  );
}

export default Home;
