import React from 'react';
import { Card } from './Card';
import VerfiedIcon from '@assets/icons/verified.svg';
import StarIcon from '@assets/icons/star.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { comments } from '@helpers/constants';

export function Comment() {
    let [current, setCurrent] = React.useState(0);

    let previousSlide = () => {
        setCurrent((current - 1 + comments.length) % comments.length);
    };

    let nextSlide = () => {
        setCurrent((current + 1) % comments.length);
    };

    return (
        <div className="relative">
            <div className=" w-full carousel-container">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {comments.map((comment, index) => (
                        <div key={index} className="slide">
                            <Card
                                className="group relative flex flex-col items-start bg-white p-4 rounded"
                                key={comment.id}
                            >
                                <div className="flex justify-start items-center w-full">
                                    <div className="flex items-center">
                                        <img
                                            src={comment.avatar}
                                            alt="avatar"
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-2 gap-1">
                                        <div className="flex justify-start items-center gap-1">
                                            {[...Array(5)].map((_, index) => (
                                                <img
                                                    key={index}
                                                    src={StarIcon}
                                                    alt="star"
                                                    className="w-3 h-3"
                                                />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-caption text-primary font-bold tracking-normal">
                                                {comment.name}
                                            </p>
                                            <div className="flex justify-center items-center">
                                                <img
                                                    src={VerfiedIcon}
                                                    alt="verified"
                                                    className="w-3 h-3"
                                                />
                                                <p className="text-caption font-light text-validation-success">
                                                    Verified Customer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Card.Description className="text-body text-primary font-extralight tracking-normal">
                                    {comment.comment}
                                </Card.Description>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1 right-2  h-full w-full flex items-center justify-between  text-black">
                <button onClick={previousSlide} className="">
                    <ChevronLeftIcon className="p-2.5" />
                </button>
                <button onClick={nextSlide}>
                    <ChevronRightIcon className="p-2.5" />
                </button>
            </div>
        </div>
    );
}
