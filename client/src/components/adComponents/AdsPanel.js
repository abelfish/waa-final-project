import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JobAd from './JobAd';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobs } from '../../redux/JobAdReducer';

function AdsPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jobAds, setJobAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState(jobAds);

  if (
    localStorage.getItem('isLoggedIn') === 'false' ||
    localStorage.getItem('isLoggedIn') === null
  ) {
    navigate('/login');
  }
  const getData = async () => {
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
        setJobAds(data);
        setFilteredAds(data);
        dispatch(getJobs());
      })
      .catch((err) => {
        console.log(err);

        navigate('/login');
      });
    return response;
  };

  useEffect(() => {
    getData();
  }, []);

  // const jobAds = useSelector((state) => state.JobAdReducer.jobAds);

  const [search, setSearch] = useState('');

  const onSearchClicked = (e) => {
    e.preventDefault();
    if (search === '' || search === null || search === undefined)
      setFilteredAds(jobAds);
    else console.log(jobAds);
    setFilteredAds(
      jobAds.filter(
        (ad) =>
          String(ad.jobTitle).toLowerCase().includes(search.toLowerCase()) ||
          String(ad.address).toLowerCase().includes(search.toLowerCase()) ||
          String(ad.companyName).toLowerCase().includes(search.toLowerCase()) ||
          String(ad.tags).toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  jobAds.sort((a, b) => {
    return new Date(b.lastApplyDate) - new Date(a.lastApplyDate);
  });

  return (
    <div>
      <div className="w-full p-12 rounded bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-2xl md:text-4xl font-bold text-gray-800">
              Latest Job Listings
            </p>
            <p className="text-2xl font-light text-gray-400"></p>
          </div>
          <div className="">
            <form
              onSubmit={onSearchClicked}
              className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
            >
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" w-80 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter title, location, or keyword"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {filteredAds.map((ad, index) => {
            while (index < 10) {
              return (
                <div
                  key={ad.id}
                  className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
                >
                  <JobAd {...ad} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-full mt-20 rounded p-12 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-2xl md:text-4xl font-bold text-gray-800">
              Recently Applied Jobs
            </p>
            <p className="text-2xl font-light text-gray-400"></p>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default AdsPanel;
