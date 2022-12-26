import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JobAd from './JobAd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function AdsPanel() {
  const [jobAds, setJobAds] = useState([]);
  const userId = localStorage.getItem('userId');
  const ads = [];
  function AddElement(props) {
    if (!localStorage.getItem('user').includes('FACULTY')) {
      return props.children;
    } else {
      return null;
    }
  }
  const getJobs = async () => {
    const response = await fetch('http://localhost:8080/jobAdverts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Array.from(data).forEach((ad) => {
          if (String(ad.student.id) === userId) {
            ads.push(ad);
          }
        });
        setJobAds(ads);
      });
    return response;
  };

  useEffect(() => {
    getJobs();
  }, []);

  const results = () => {
    if (jobAds.length === 0) {
      const user = localStorage.getItem('user');
      const roles = JSON.parse(user).roles;
      console.log(roles);
      if (roles.includes('FACULTY')) {
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-2xl font-semibold text-gray-600">
              You are not authorized to add job advertisements.
            </p>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-2xl font-semibold text-gray-600">
              You have not added any job advertisements yet.
            </p>
          </div>
        );
      }
    } else {
      return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {jobAds.map((ad) => (
            <div
              key={ad.id}
              className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
            >
              <JobAd {...ad} />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="w-full p-12 rounded bg-white">
        <div className="flex  md:flex-row justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-2xl md:text-4xl font-bold text-gray-800">
              My Job Advertisements
            </p>
            <p className="text-2xl font-light text-gray-400"></p>
          </div>
          <div className="md:inline ">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-1 xl:grid-cols-1">
              <AddElement>
              <Link
                to="/addJobAd"
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Add Job Advertisement
              </Link>
              </AddElement>
            </div>
          </div>
        </div>
        {results()}
      </div>
    </div>
  );
}

export default AdsPanel;
