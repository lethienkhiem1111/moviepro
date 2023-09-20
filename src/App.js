
import './App.css';
import { Fragment, useEffect } from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";


function App() {
  

  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-6 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
       
        
      </section>
      <section className="movies-layout page-container mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img src="https://s3.amazonaws.com/static.rogerebert.com/uploads/collection/primary_image/the-best-animated-movies-of-2019/hero_the-best-animated-movies-of-2019.jpg" 
            alt="movie thumbnail"
            className="w-full h-[250px] object-cover rounded-lg mb-5" />
            <h3 className="text-white text-2xl font-bold mb-3">Cartoon Cowboy</h3>
            <div className="flex items-center justify-between text-gray-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className=" w-full py-3 px-6 rounded-lg capitalize bg-primary text-white">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
