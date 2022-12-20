import React from 'react';
import { Link } from 'react-router-dom';
import JobAd from './JobAd';

function AdsPanel() {
  const ads = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      location: 'New York',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Facebook',
      location: 'New York',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['React', 'Node', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Amazon',
      location: 'Washington D.C.',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['MongoDB', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
    },
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      location: 'San Francisco',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Facebook',
      location: 'Seattle',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['React', 'Node', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Amazon',
      location: 'Portland',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: [
        'React',
        'Node',
        'Express',
        'MongoDB',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind',
      ],
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Facebook',
      location: 'Chicago',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: ['React', 'Node', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Amazon',
      location: 'Seattle',
      salary: '100k',
      imageUrl: '/images/test.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      tags: [
        'React',
        'Node',
        'Express',
        'MongoDB',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind',
      ],
    },
  ];

  return (
    <div>
      <div className="w-full p-12 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-2xl md:text-4xl font-bold text-gray-800">
              Lastest Job Listings
            </p>
            <p className="text-2xl font-light text-gray-400"></p>
          </div>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
            >
              <JobAd {...ad} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdsPanel;
