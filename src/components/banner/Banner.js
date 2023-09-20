import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=846c600128c8952f297663923c6e1522",
    fetcher
  );

  //   useEffect(() => {
  //     if (data && data.results) {
  //       setMovies(data.results);
  //     }
  //     const swiper = new Swiper(".swiper-container", {
  //       slidesPerView: 3,
  //       direction: "horizontal",
  //       spaceBetween: 24,
  //     });

  //     return () => {
  //       swiper.destroy();
  //     };
  //   }, [data]);
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
    const swiper = new Swiper(".swiper-banner-container", {
      slidesPerView: 1,
      direction: "horizontal",
      spaceBetween: 24,
    });

    return () => {
      swiper.destroy();
    };
  }, [data]);

  return (
    <section className="banner h-[400px] page-container mb-20">
      <div className="movie-banner-list swiper-banner-container">
        <div className="swiper-wrapper">
          {movies.length > 0 &&
            movies.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <BannerItem item={item}></BannerItem>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;

  return (
    <div className="w-full h-full rounded-lg bg-white relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="Banner"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-4">{title}</h2>
        <div className="flex items-center gap-x-3 mb-5">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
