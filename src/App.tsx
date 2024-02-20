import React, { useEffect } from 'react';
import Home from './Pages/Home';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './Store/homeSlice';
import {HomeState} from './Store/homeSlice'; // Import the HomeState type
import { Route, Routes, } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const {url} = useSelector((state: {home : HomeState}) => state.home); // Use HomeState type for state
  console.log(url)

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = async () => {
    try {
      const res = await fetchDataFromApi('/configuration');
      console.log(res);

      const url = {
        backdrop:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
