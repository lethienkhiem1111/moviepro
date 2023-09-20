import React, { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import useSWR from 'swr';
import { fetcher } from "../config";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key=846c600128c8952f297663923c6e1522

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=846c600128c8952f297663923c6e1522', fetcher)
    

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
        const swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          direction: 'horizontal',
          spaceBetween: 24,
        });
    
        return () => {
          swiper.destroy();
        };
    }, [data])

  
    return (
        <div className="movie-list swiper-container">
      <div className="swiper-wrapper">
      {movies.length > 0 && movies.map(item => (
        <div className="swiper-slide" key={item.id}>
        <MovieCard item = {item}></MovieCard>
        </div>
      ))}
        
        
      </div>
    </div>
    );
};

export default MovieList;