import React, { useEffect, lazy, Suspense } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from './Banner';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import './Details.css';

const Casting = lazy(() => import('./Casting/Casting'));
const Social = lazy(() => import('./Casting/Social'));
const Media = lazy(() => import('./Casting/Media'));
const Recommendations = lazy(() => import('./Casting/Recommendations'));
const RightPanel = lazy(() => import('./Casting/RightPanel/RightPanel'));

const Details = () => {
  const { id, media_type } = useParams();
  const { data, loading, error, refetch } = useFetch("/" + media_type + "/" + id);

  useEffect(() => {
    if (!data || error) {
      refetch("/" + media_type + "/" + id);
    }
  }, [id, media_type]);

  return (
    <div className="Details">
      <Header />
      <Banner />
      <div className="content">
        <div className="left-panel">
          <Suspense fallback={<div>Loading...</div>}>
            <Casting />
            <Social />
            <Media />
            <Recommendations />
          </Suspense>
        </div>
        <div className="right-panel">
          <Suspense fallback={<div>Loading...</div>}>
            <RightPanel />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
