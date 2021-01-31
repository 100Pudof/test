import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { useSelector } from 'react-redux';


export default function Slider() {
    const images = useSelector((state) => state.images);
    const params = {
        slidesPerView: 4,
        spaceBetween: 100,
    };

    return (
        <Swiper {...params}>
            {images.map((item, idx ) => (
                <div key={idx}>
                    <img src={item.url} className="images_items" alt="description of image"/>
                </div>
            ))}
        </Swiper>
    )
}
