import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import StudentElement from '../authorizationElements/StudentElement';

export default function ProfileInfo() {
  const navigate = useNavigate();
  const userObj = localStorage.getItem('user');
  const userInfo = JSON.parse(userObj);
  const username = userInfo.preferred_username;
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    imageUrl: '',
    address: {
      id: 0,
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  });
  const getData = async () => {
    const response = fetch('http://localhost:8080/users/username/' + username, {
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
        setUser(data);
      })
      .catch((error) => {
        navigate('/login');
        alert('You must be logged in to view this page');
      });
    return response;
  };

  useEffect(() => {
    getData();
  }, []);


  const downloadResume = () => {
  }

  return (
    <div className="overflow-hidden p-10 bg-white shadow sm:rounded-lg">
      <div className="py-5 md:flex gap-5">
        <div className="px-4 py-1 sm:px-6 md:w-60">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details.
          </p>
        </div>
        <div className="px-4 py-5 columns-1">
          <div className="flex items-center rounded-md border-red-900"></div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {user.firstName + ' ' + user.lastName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${user.address.street}`}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"></dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${user.address.city}, ${user.address.state} 
            ${user.address.zip}`}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <StudentElement>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachment</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                 
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon 
                     className="h-5 w-5 flex-shrink-0 text-gray-400"
                     aria-hidden="true" 
                     />
                      <span className="ml-2 w-0 flex-1 truncate">
                        {user.resumePath}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                       onClick={downloadResume}                       
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </button>
                    </div>
                  </li>
              
                </ul>
              </dd>
            </div>
          </StudentElement>
        </dl>
      </div>

      <div className="mt-10 ml-2">
        <Link to="/profileInfoEdit">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
