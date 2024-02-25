import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgwNjU0MzdjZWNiMzQ0ZjU4Y2FhMjJmNjM1ZDA3MiIsInN1YiI6IjY1ZDQyOGQyZTY0MGQ2MDE2NGViYjFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hpEDY_uuzRsyA3fXsvK4Qo9exUxJKkyXeyUKpZaOYo";

const headers = {
  Authorization: "Bearer " + API_KEY,
  Accept: "application/json" // Define accept header as well
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params
    });
    return data;
  } catch (err) {
    console.error("error:", err);
    throw err; 
  }
};
