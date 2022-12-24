import { React, useEffect } from 'react';
import AdsPanel from './adComponents/AdsPanel';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {
    console.log('Dashboard: isLoggedIn: ', isLoggedIn);
  });

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 px-3 lg:px-8 flex">
            <div className="mx-auto md:px-4 md:py-6 sm:px-0">
              <AdsPanel />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
