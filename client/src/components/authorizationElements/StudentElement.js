import React from 'react';
import { useSelector } from 'react-redux';
import Unauthorized from '../403';
import PageNotFound from '../404';

function StudentElement(props) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  const user = localStorage.getItem('user');
  const roles = JSON.parse(user).roles;
  if (!roles.includes('STUDENT')) return null;
  return <div>{props.children}</div>;
}

export default StudentElement;
