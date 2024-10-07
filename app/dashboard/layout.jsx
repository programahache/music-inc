'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Head from 'next/head';
import './dashboard.css'

//ICONOS 

import { MdHome } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { ImSoundcloud } from "react-icons/im";
import { RiPlayList2Fill } from "react-icons/ri";
import { IoAlbumsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";

//SLIDER 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function DashboardLayout({ children }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = Cookies.get('session');
        if (!session) {
            router.push('/login');
        } else {
            const sessionData = JSON.parse(session);
            setUser(sessionData.user);
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) {
        return <p>Redirigiendo...</p>;
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false

    };

    return (
        <div id="dashboardLayout">
            <aside className="[grid-area:aside] flex flex-col overflow-y-auto bg-transparent p-2 ">
                <h1 className="text-2xl text-center font-bold">Music INC</h1>

                <div className="p-2 flex flex-col gap-2 border-b ">
                    <div className="flex gap-2 items-center text-xl bg-neutral-800 p-2 rounded-lg font-bold cursor-pointer">
                        <MdHome />
                        <p>Principal</p>
                    </div>
                    <div className="flex gap-2 items-center text-xl hover:bg-neutral-800 p-2 rounded-lg font-bold cursor-pointer">
                        <MdExplore />
                        <p>Explorar</p>
                    </div>
                    <div className="flex gap-2 items-center text-xl hover:bg-neutral-800 p-2 rounded-lg font-bold cursor-pointer">
                        <ImSoundcloud />
                        <p>Biblioteca</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-2">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-neutral-800 rounded-lg">
                        <RiPlayList2Fill />
                        <p>Mis Playlists</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-neutral-800 rounded-lg">
                        <IoAlbumsSharp />
                        <p>Mis Álbumes </p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-neutral-800 rounded-lg">
                        <FaHeart />
                        <p>Mis Artistas</p>
                    </div>
                </div>

                <div className="text-center mt-2">
                    <h2 className="font-bold">Nuevos lanzamientos</h2>
                    <div className="w-[90%]">
                        <Slider {...settings}>
                            <div className="p-2">
                                <div className="flex gap-2">
                                    <img src="https://via.placeholder.com/100" alt="Album" />
                                    <div className="flex flex-col gap-2 justify-between">
                                        <p className="text-lg font-semibold">album 1</p>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                        <button className="p-1 bg-green-600 rounded-lg">Escuchar ahora</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="flex gap-2">
                                    <img src="https://via.placeholder.com/100" alt="Album" />
                                    <div className="flex flex-col gap-2 justify-between">
                                        <p className="text-lg font-semibold">album 2</p>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                        <button className="p-1 bg-green-600 rounded-lg">Escuchar ahora</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="flex gap-2">
                                    <img src="https://via.placeholder.com/100" alt="Album" />
                                    <div className="flex flex-col gap-2 justify-between">
                                        <p className="text-lg font-semibold">album 3</p>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                        <button className="p-1 bg-green-600 rounded-lg">Escuchar ahora</button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </aside>
            <main className="[grid-area:main] flex flex-col overflow-x-hidden overflow-y-auto bg-neutral-900 p-2">{children}</main>
            <div className="[grid-area:player] flex items-center justify-between overflow-y-auto p-3 bg-neutral-600  ">
                <div className="flex gap-3 text-2xl">
                    <button>
                        <IoPlaySkipBackSharp />
                    </button>
                    <button>
                        <FaPlay />
                    </button>
                    <button>
                        <IoPlaySkipForward />
                    </button>
                </div>
                <div className="flex flex-row-reverse gap-2 justify-center">
                    <div>
                        <p>Kendrick Lamar</p>
                        <p>Not like us</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/50" alt="Album" />
                    </div>
                </div>
                <div>
                    <p>$5 <span>usd</span></p>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}