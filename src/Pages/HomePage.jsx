import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Layout Hoc
import DefaultLayoutHoc from '../Layouts/DefaultLayout';

//Component
import EntertainmentCard from '../Components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/HeroCarouselComponent';
import PosterSlider from '../Components/PosterSlider/PosterSliderComponent';



const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    
    useEffect(() => {
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setRecommendedMovies(getTopRatedMovies.data.results);
        }
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get('/movie/popular');
            setPremierMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            <div className = "container mx-auto px-4 md:px-12 my-8">
                <h1 className = "text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best Of Live Events</h1>
                <EntertainmentCard />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider 
                    title = "Recommended Movies" 
                    subtitle = "List of recommended Movies" 
                    posters = {recommendedMovies} 
                    isDark = {false} 
                />
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img 
                        src = "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" 
                        alt = "Premiers" 
                        className='w-full h-full'
                        />
                    </div>
                    <PosterSlider 
                    title = "Premiers" 
                    subtitle = "Brand new releases every Friday"
                    posters = {premierMovies} 
                    isDark = {true}
                    />
                </div>
            </div>
            <div className = "Container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
               <PosterSlider 
                    title = "Online Stream Events" 
                    subtitle = "Online Stream Events"
                    posters = {onlineStreamEvents} 
                    isDark = {false}
                /> 
            </div>
        </>
    );
};

export default DefaultLayoutHoc(HomePage);