import React from 'react';
import { Link } from 'react-router-dom';

export function SignInButton(props) {
  let result;
  if (
    localStorage.getItem('isLoggedIn') === false ||
    localStorage.getItem('isLoggedIn') === null
  ) {
    result = (
      <div>
        <Link
          to="/login"
          className="text-base font-medium bg-white py-2 px-2 rounded-md text-gray-700 hover:text-gray-900"
        >
          Sign in
        </Link>
      </div>
    );
  } else {
    result = props.children;
  }
  return <div>{result}</div>;
}
