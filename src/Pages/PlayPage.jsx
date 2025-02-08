import React from 'react';
import DefaultLayoutHoc from '../Layouts/DefaultLayout';

// Components
import Poster from '../Components/Poster/Poster.Component';
import PlayFilter from '../Components/PlayFilter/PlayFilter.Component';


const PlayPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <h2 className='text-2xl font-bold mb-4'>Plays in Bengaluru</h2>
                <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA5IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401782-advspdhxqw-portrait.jpg" 
                            title = "Crabbby" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00429387-rjsmrzqmug-portrait.jpg" 
                            title = "Life of Galileo" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00349259-uzyzgzktna-portrait.jpg" 
                            title = "Mohabbat Zindabaad by Jai Singh" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxOCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00428751-sdfqbwnads-portrait.jpg" 
                            title = "Mera Wajood- The Story of Third Gender" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403216-hxtnnccbru-portrait.jpg" 
                            title = "25 & Single - Helly Shah - India Tour" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA5IEZlYiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg" 
                            title = "Improv Workshop" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA5IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378627-psdubcmcmq-portrait.jpg" 
                            title = "Nammalle Modalu" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster 
                            isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407160-yjlkfvtjjq-portrait.jpg" 
                            title = "Bag Dancing" 
                            subtitle = "Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins" />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4 p-4 bg-white rounded'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div>
                        <PlayFilter title = "Dates" tags = {["Today", "Tomorrow", "This Weekend"]} />
                    </div>
                    <div>
                        <PlayFilter title = "Languages" tags = {["English", "Kannada", "Malayalam", "Hindi"]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultLayoutHoc(PlayPage);