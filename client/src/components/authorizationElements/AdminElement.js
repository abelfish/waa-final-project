import React from 'react';
import { useSelector } from 'react-redux';
import Unauthorized from '../403';

function AdminElement(props) {
  const user = useSelector((state) => state.UserReducer.user);
  if (user.role !== 'ADMIN') return <Unauthorized />;
  return <div>{props.children}</div>;
}

export default AdminElement;
