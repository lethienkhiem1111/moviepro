import React from 'react';

const MovieCard = ({item}) => {
    const { title, vote_average, release_date, poster_path } = item;
    return (
        <div className="flex flex-col movie-card rounded-lg p-3 bg-slate-800">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="w-full h-[250px] object-cover rounded-lg mb-5" alt="poster"/>
            <div className="flex flex-col flex-1 justify-between">
                <h3 className="text-max-2line text-white text-2xl font-bold mb-3">{title}</h3>
                <div className="flex items-center justify-between text-gray-50 mb-10">
                <span>{release_date}</span>
                <span>{vote_average}</span>
                </div>
            </div>
            <button className=" w-full py-3 px-6 rounded-lg capitalize bg-primary text-white">
              Watch now
            </button>
          </div>
    );
};

export default MovieCard;