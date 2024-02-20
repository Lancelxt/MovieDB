import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// Define the type for your API response
interface ApiResponse {
    results:any    
}

// Define the type for your state
interface State {
  data: ApiResponse | null;
  loading: boolean | string | null;
  error: string | null;
}

const useFetch = (url: string) => {
  const [state, setState] = useState<State>({
    data: null,
    loading: null,
    error: null
  });

  useEffect(() => {
    setState({ data: null, loading: "loading...", error: null });

    fetchDataFromApi(url)
      .then((res: ApiResponse) => {
        setState({ data: res, loading: false, error: null });
      })
      .catch((err: Error) => {
        setState({ data: null, loading: false, error: "Something went wrong!" });
      });
  }, [url]);

  return state;
};

export default useFetch;
