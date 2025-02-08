import React, { useContext, useState } from 'react'
import { MovieContext } from '../../Context/MovieContext';
import PaymentModal from '../PaymentModal/PaymentModal';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(",");

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    };

    return (
        <>
            <PaymentModal setIsOpen = {setIsOpen} isOpen = {isOpen} price = {price} />
            <div className="flex flex-col gap-8">
                <h1 className='text-white text-5xl font-semibold'>{movie.original_title}</h1>
                <div className="text-white font-semibold flex flex-col gap-2">
                    <h4>4.4k rating</h4>
                    <h4>English, Kannada, Hindi, Telugu, Tamil</h4>
                    <h4>{movie.runtime} min | {genres}</h4>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                    <button onClick={rentMovie} className="bg-red-500 py-2 px-3 text-white font-semibold rounded-lg">
                        Rent ₹149
                    </button>
                    <button onClick={buyMovie} className="bg-red-500 py-2 px-3 text-white font-semibold rounded-lg">
                        Buy ₹599
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;
