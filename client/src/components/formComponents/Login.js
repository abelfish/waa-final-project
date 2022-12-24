import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/UserReducer';
import { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setUser } from '../../redux/UserReducer';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      grant_type: 'password',
      scope: 'openid',
      client_id: 'springboot-api',
      client_secret: '7fcXVZS71HO8ZMjm6Ik34oiqR73BpAoc',
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };
    const login = await axios
      .post(
        'http://localhost:8090/realms/project-realm/protocol/openid-connect/token',
        data,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic c3ByaW5nYm9vdC1hcGk6N2ZjWFZaUzcxSE84Wk1qbTZJazM0b2lxUjczQnBBb2M=`,
          },
        }
      )
      .then((response) => {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        localStorage.setItem('expires_in', response.data.expires_in);
        localStorage.setItem('isLoggedIn', true);
        getUserData();

        navigate('/dashboard');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('Invalid username or password');
        } else {
          alert('An error occured');
        }
      });
  };

  const getUserData = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      'http://localhost:8090/realms/project-realm/protocol/openid-connect/userinfo',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const roles = jwt_decode(localStorage.getItem('token'))
      .realm_access.roles.filter(
        (role) => role === 'admin' || role === 'faculty' || role === 'student'
      )
      .map((role) => role.toUpperCase());
    response.data.roles = roles;
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data.preferred_username);
    dispatch(setUser(response.data));
    const username = response.data.preferred_username;
    const user = await fetch(
      'http://localhost:8080/users/username/' + username,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
  
        localStorage.setItem('userId', data.id);
      });
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} action="#">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <Link
              to={'/signup'}
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span className="ml-2">Don&#x27;t have an account?</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
