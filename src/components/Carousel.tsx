import { useState } from 'react';

import ScrollLeftIcon from '@assets/icons/scroll-left.svg';
import ScrollRightIcon from '@assets/icons/scroll-right.svg';
import { IHeaderItem } from '@/types/interfaces';

import '@styles/Carousel.css';

export default function Carousel({ slides }: { slides: IHeaderItem[] }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    let nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    return (
        <div className="overflow-hidden relative w-full carousel-container">
            <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <div className="flex justify-center items-center gap-2">
                            <img
                                src={slide.icon}
                                alt={slide.name}
                                className="w-6 h-6 mr-1"
                            />
                            <span className="text-caption">{slide.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex items-center justify-between text-white  text-3xl">
                <button onClick={previousSlide}>
                    <img src={ScrollLeftIcon} alt="scroll-left" />
                </button>
                <button onClick={nextSlide}>
                    <img src={ScrollRightIcon} alt="scroll-right" />
                </button>
            </div>
        </div>
    );
}
