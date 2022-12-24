import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function SignedInElement(props) {
  const navigate = useNavigate();
  const userSignedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!userSignedIn) {
      console.log('User not signed in');
      navigate('/login');
    }
  });
  return <div>{props.children}</div>;
}
export default SignedInElement;
