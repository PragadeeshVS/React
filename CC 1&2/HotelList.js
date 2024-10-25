import React from 'react';
import HotelCard from './HotelCard';
import { useLocation } from 'react-router-dom';
import './HotelList.css'

const hotels = [
    {
        name: 'Luxury Inn',
        city: 'Bangalore',
        description: 'A luxurious hotel in the heart of New York City.',
        price: 2500,
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Beachside Resort',
        city: 'Bangalore',
        description: 'Relaxing resort with beach access in Los Angeles.',
        price: 1600,
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Four Seasons Hotel Bengaluru',
        city: 'Palakkad',
        description: 'Relaxing resort with beach access in Los Angeles.',
        price: 3300,
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Beachside Resort',
        city: 'Palakkad',
        description: 'Relaxing resort with beach access in Los Angeles.',
        price: 3500,
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Chennais Hotel',
        city: 'Chennai',
        description: 'Modern hotel located in downtown Chicago.',
        price: 4200,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZExQXdp0InNzZ4DQ4yi473LBeOB8CSyBPQ&s'
    },
    {
        name: 'Downtown Hotel',
        city: 'Coimbatore',
        description: 'Modern hotel located in downtown Chicago.',
        price: 7200,
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Downtown Hotel',
        city: 'Salem',
        description: 'Modern hotel located in downtown Chicago.',
        price: 1200,
        imageUrl: 'https://via.placeholder.com/150'
    },
];

const HotelList = () => {
    const location = useLocation();
    const selectedCity = location.state?.selectedCity || ''; 

    const cityHotels = hotels.filter(hotel => hotel.city === selectedCity);

    return (
        <div className="titeee">
            <h1>Hotels in "{selectedCity}"</h1>
            {cityHotels.length > 0 ? (
                cityHotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))
            ) : (
                <p>Sorry, No hotels available for the selected city.</p>
            )}
        </div>
    );
};

export default HotelList;
