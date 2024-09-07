'use client'
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [roomID, setRoomID] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-10 space-y-6 bg-white bg-opacity-10 rounded-3xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-center text-white tracking-wider">
          ConnectNow
        </h1>
        <p className="text-center text-gray-200">
          Seamless Video Communication, Anytime, Anywhere
        </p>
        <div className="space-y-6">
          <input
            type="text"
            id="meeting-id"
            className="w-full px-5 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter Meeting ID"
            value={roomID}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomID(e.target.value)}
          />
          <Link href={`./meeting/${roomID}`}>
            <button className="w-full mt-3 py-3 font-bold text-indigo-600 bg-white bg-opacity-80 rounded-full shadow-lg transition-transform transform hover:-translate-y-0.8  hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              Join Meeting
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
