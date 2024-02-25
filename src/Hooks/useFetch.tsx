import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

interface ApiResponse {
    results:any    ;
    backdrop_path:string;
    poster_path:string;
    title:string;
    vote_average:number;
    overview:string;
    crew:string;
    job:string;
    tagline:string;
    name:string;
    release_date:string;
    genres:any;
    runtime:number;
    cast:any;
    author_details:any;
    backdrops:any;
    posters:any;
    status:string;
    original_language:string;
    budget:number;
    revenue:number;
    keywords:any;
    

}

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

  const refetch=(refetchUrl?:string)=>{
    if(!refetchUrl){
      fetchDataFromApi(url)
      return
    }
    fetchDataFromApi(refetchUrl)

  }

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

  return {refetch,...state};
};

export default useFetch;
