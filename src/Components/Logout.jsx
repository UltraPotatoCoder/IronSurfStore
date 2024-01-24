import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL_LOGOUT = 'https://iron-surf-store.adaptable.app/logout';

    axios
      .post(API_URL_LOGOUT)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error('Logout error:', error);

        navigate('/login');
      });
  }, [navigate]);

  return null;
};

export default Logout;
