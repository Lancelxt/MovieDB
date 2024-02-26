import React, { useEffect } from "react";
import Home from "./Pages/Home";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";
import { HomeState } from "./Store/homeSlice";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Details from "./Pages/Details/Details";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state: { home: HomeState }) => state.home);

  useEffect(() => {
    fetchApiConfig();
    setupGlobalErrorHandling();
  }, []);

  const fetchApiConfig = async () => {
    try {
      const res = await fetchDataFromApi("/configuration");

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const setupGlobalErrorHandling = () => {
    window.addEventListener("error", handleGlobalError);
    return () => {
      window.removeEventListener("error", handleGlobalError);
    };
  };

  const handleGlobalError = (event: ErrorEvent) => {
    console.error("Global error occurred:", event.error);
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />

        <Route path="/:media_type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
