// logos
import Logo from '@assets/logos/logo.svg';
import McafeeLogo from '@assets/logos/mcafee.svg';
import NortonLogo from '@assets/logos/norton.svg';
import { ContainerOuter } from '@components/Container';
import Carousel from '@components/Carousel';
import { itemes } from '@helpers/constants';

export function Header(): JSX.Element {
    return (
        <>
            <header className="pointer-events-none  z-50 flex flex-none flex-col w-full relative ">
                <div className="pointer-events-auto">
                    <div className="flex items-center bg-solid-primary py-2 lg:px-4 text-xs font-medium text-gray-500 w-full ">
                        <ContainerOuter
                            className="flex justify-evenly items-center space-x-2 w-full"
                            style={{ height: '30px' }}
                        >
                            <ul className="justify-between items-center space-x-2 w-full hidden lg:flex">
                                {itemes.map((logo, index) => (
                                    <li
                                        className="flex justify-center items-center"
                                        key={index}
                                    >
                                        <img
                                            src={logo.icon}
                                            alt={logo.name}
                                            className="w-6 h-6 mr-1"
                                        />
                                        <span className="text-caption">{logo.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center items-center gap-2 lg:hidden ">
                                <Carousel slides={itemes} />
                            </div>
                        </ContainerOuter>
                    </div>
                    <ContainerOuter>
                        <div className="flex justify-between items-center w-full ">
                            <div>
                                <img
                                    src={Logo}
                                    alt="mcafee"
                                    className="lg:w-32 w-28 h-16"
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <img
                                    src={McafeeLogo}
                                    alt="mcafee"
                                    className="lg:w-20 h-16 w-16"
                                />
                                <img
                                    src={NortonLogo}
                                    alt="norton"
                                    className="lg:w-20 h-16 w-16"
                                />
                            </div>
                        </div>
                    </ContainerOuter>
                </div>
            </header>
        </>
    );
}
