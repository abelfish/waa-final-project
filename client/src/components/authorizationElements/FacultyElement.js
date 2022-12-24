import React from 'react';
import { useSelector } from 'react-redux';
import Unauthorized from '../403';

function FacultyElement(children) {
  const user = useSelector((state) => state.UserReducer.user);
  if (user.role !== 'FACULTY') return <Unauthorized />;
  return <div>{children}</div>;
}

export default FacultyElement;
