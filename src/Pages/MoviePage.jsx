import React, { useContext, useEffect, useState } from 'react';
import MovieLayoutHoc from './../Layouts/MovieLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../Context/MovieContext';
import MovieHero from '../Components/MovieHero/MovieHero.Component';
import PosterSlider from '../Components/PosterSlider/PosterSliderComponent';
import { FaCcApplePay, FaCcVisa } from 'react-icons/fa';
import Slider from 'react-slick';
import Cast from '../Components/Cast/CastComponent';


const MoviePage = () => {
    const {id} = useParams();

    const  {movie, setMovie} = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    


    useEffect(() => {
        const requestCast = async() => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
          const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
          setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
      }, [id]);
    
    useEffect(() => {
        const requestRecommededMovies = async () => {
          const getRecommendedMovies = await axios.get(
            `/movie/${id}/recommendations`
          );
          setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommededMovies();
      }, [id]);
    
    useEffect(() => {
        const requestMovie = async () => {
          const getMovieDate = await axios.get(`/movie/${id}`);
          setMovie(getMovieDate.data);
        };
        requestMovie();
      }, [id]);
    
      const settingsCast = {
        infinite : false,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 4,
        initialSlide : 0,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 3,
                    initialSlide : 1,
                },
            },
            {
                breakpoint : 600,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2,
                    initialSlide : 3,
                },
            },
            {
                breakpoint : 480,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    initialSlide : 2,
                },
            },
        ],
      };
    
      const settings = {
        infinite : false,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 4,
        initialSlide : 0,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 3,
                    initialSlide : 1,
                },
            },
            {
                breakpoint : 600,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2,
                    initialSlide : 3,
                },
            },
            {
                breakpoint : 480,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    initialSlide : 2,
                },
            },
        ],
      };

    
    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Recommended Movie Sliders */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Cast Slider */}
        <div className='my-8'>
            <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                Cast and Crew
            </h2>
            <Slider {...settingsCast}>
                {cast.map((castData) => (
                    <Cast 
                    image = {castData.profile_path} 
                    castName = {castData.original_name} 
                    role = {castData.character}
                    />
                ))}
            </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE Movies"
          posters={similarMovies}
          isDark={false}
        />
      </div>
        </>
    );
};

export default MovieLayoutHoc(MoviePage);