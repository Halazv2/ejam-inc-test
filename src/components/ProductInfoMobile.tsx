import React from 'react';
import { Card } from './Card';
import ProductImage from '@assets/images/image-2.png';
import StarIcon from '@assets/icons/star.svg';
import DotIcon from '@assets/icons/dot.svg';
import tickIcon from '@assets/icons/tick-circle-blue.svg';
import SaleIcon from '@assets/icons/sale.svg';
import ArrowIcon from '@assets/icons/arrow.svg';

import Lock from '@assets/icons/lock-grey.svg';

import Garantee from '@assets/images/guarantee.png';

import PrimaryProductImage from '@assets/images/image-1.png';
import { cards } from '@helpers/constants';

export function ProductInfoMobile() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [isMobile, setIsMobile] = React.useState(false);
    const [isTablet, setIsTablet] = React.useState(false);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);

        if (newWidth >= 768) {
            setIsTablet(true);
            setIsMobile(false);
        } else {
            setIsTablet(false);
            setIsMobile(true);
        }
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);
    const description =
        'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.';

    return (
        <div className="flex flex-col gap-8">
            <Card.Title
                className="text-subtitle-lg font-light text-primary tracking-normal text-center"
                style={{ lineHeight: '1.5' }}
            >
                <span className="text-tertiary">ONE TIME ONLY</span> special price for 6
                extra Clarifion for only <span className="text-tertiary">$14 each</span>{' '}
                ($84.00 total!)
            </Card.Title>

            <div className="rounded flex justify-center items-center">
                <img
                    src={PrimaryProductImage}
                    alt="product"
                    className="md:w-[60%] w-full"
                />
            </div>

            <div className="flex justify-start items-stretch gap-4 flex-col">
                <div className="flex justify-start items-stretch gap-4 ">
                    <div className="bg-solid-tertiary w-fit rounded flex justify-center items-center">
                        {/* image */}
                        <img
                            src={ProductImage}
                            alt="product"
                            className="w-36 object-contain"
                        />
                    </div>
                    <div className="flex flex-col h-full w-full gap-3">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                {/* name */}
                                <h4 className="text-black text-body">
                                    Clarifion Air Ionizer
                                </h4>
                            </div>
                            <div className="gap-2 flex justify-center items-center">
                                {/* price */}
                                <span className="text-muted line-through text-caption">
                                    $180
                                </span>
                                <span className="text-tertiary text-body">$84</span>
                            </div>
                        </div>
                        <div>
                            {/* stars */}
                            <div className="flex justify-start items-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <img src={StarIcon} alt="star" key={index} />
                                ))}
                            </div>
                        </div>
                        <div>
                            {/* stock */}
                            <div className="flex justify-start items-center gap-1">
                                <img src={DotIcon} alt="dot" />
                                <span className="text-muted text-caption">
                                    12 left in Stock
                                </span>
                            </div>
                        </div>

                        {isTablet && !isMobile && (
                            <div>
                                {/* description */}
                                <p className="text-muted-dark text-caption">
                                    {description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* change description placement on mobile */}
                {isMobile && (
                    <div>
                        {/* description */}
                        <p className="text-muted-dark text-center text-caption">
                            {description}
                        </p>
                    </div>
                )}
            </div>

            <div>
                {/* bullets */}
                <ul className="list-inside list-none font-light gap-4 flex flex-col spacing">
                    <li className="text-muted-dark text-caption">
                        <img
                            src={tickIcon}
                            alt="tick"
                            className="inline-block mr-2 w-5 h-4"
                        />
                        Negative Ion Technology may{' '}
                        <strong className="font-bold">help with allergens</strong>
                    </li>
                    <li className="text-muted-dark text-caption">
                        <img
                            src={tickIcon}
                            alt="tick"
                            className="inline-block mr-2 w-5 h-4"
                        />
                        Designed for{' '}
                        <strong className="font-bold">air rejuvenation</strong>
                    </li>
                    <li className="text-muted-dark text-caption">
                        <img
                            src={tickIcon}
                            alt="tick"
                            className="inline-block mr-2 w-5 h-4"
                        />
                        <strong className="font-bold">Perfect for every room</strong> in
                        all types of places.
                    </li>
                </ul>
            </div>

            <div className="bg-light-tertiary rounded flex justify-start items-center py-3 px-5 text-caption ">
                {/* save description */}
                <img src={SaleIcon} alt="sale" className="inline-block mr-2 w-7" />
                <p className="text-muted-dark">
                    Save <span className="text-tertiary">53%</span> and get{' '}
                    <span className="text-tertiary">6 extra Clarifision</span> for only{' '}
                    <span className="text-tertiary">$14 Each</span>.
                </p>
            </div>

            <div className="flex flex-col">
                {/* button */}
                <button className="flex justify-center items-center uppercase gap-2 mb-3 bg-solid-quinary rounded-full py-3 px-5 text-white font-medium w-full button-with-hover-effect">
                    <span>Yes - Claim my discount</span>
                    <img src={ArrowIcon} alt="arrow" className="arrow-icon" />
                </button>
                {/* shipping */}
                <div className="flex flex-col justify-center items-center gap-1 border border-zinc-300 p-1 rounded mb-3">
                    <div className="flex justify-center items-center gap-2 text-senary text-caption border-b border-zinc-300 pb-2 w-100">
                        <div className="flex justify-center items-center text-senary text-caption">
                            <span>Free shipping</span>
                        </div>
                        |
                        <div className="flex justify-center items-center text-senary text-caption">
                            <img src={Lock} alt="lock" className="w-4 h-4 mr-1" />
                            <span>Secure 256-bit SSL encryption.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            {cards.map((card, index) => (
                                <img
                                    src={card}
                                    alt="card"
                                    className="w-6 h-6"
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* reject */}
                <div className="flex justify-center items-center">
                    <span className="text-danger underline text-body cursor-pointer">
                        No thanks, I don’t want this.
                    </span>
                </div>
            </div>

            <div className="flex gap-4">
                {/* guarantee */}
                <img src={Garantee} alt="garantee" className="w-20 h-16" />
                <Card.Description className="text-body text-primary font-extralight tracking-normal relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    If you are not completely thrilled with your Clarifion -{' '}
                    <strong>We have a 30 day satisfaction guarantee</strong>. Please refer
                    to our return policy at the bottom of the page for more details. Happy
                    Shopping!{' '}
                </Card.Description>
            </div>
        </div>
    );
}
