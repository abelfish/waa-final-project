import React from 'react';
import { Link } from 'react-router-dom';

function JobAd(props) {

  const imageUrl = (url) => (url ? url : 'https://picsum.photos/200/300');


  return (
    <div key={props.id}>
      <div key={props.id}  className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer w-60 md:w-80">
        <Link to={'/job-ad-details/' + props.id} className="block w-full h-full">
          <img
            alt="Job Ad"
            src={imageUrl(props.imageUrl)}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-medium text-indigo-500 text-md">
              {props.address}
            </p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              {props.jobTitle}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md h-44">
              {props.description}
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">
              {String(props.tags).split(" ").map((tag) => (
                <div className="text-xs mr-2 py-1 px-3 my-1 text-gray-600 bg-blue-100 rounded-2xl">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default JobAd;
