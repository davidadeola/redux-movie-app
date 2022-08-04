import React, { useEffect, useRef } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  const hasFetchedData = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasFetchedData.current === false) {
      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());
      hasFetchedData.current = true;
    }
  }, [dispatch]);

  //   dispatch(fetchAsyncMovies());
  // }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
