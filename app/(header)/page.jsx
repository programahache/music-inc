"use client"; // Esto asegura que todo el componente se renderice solo en el cliente

import Image from "next/image";
//SLIDER 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false

  };



  return (
    <>


      <main className=" flex flex-col gap-5 p-3 ">


        <section className="text-center p-3">
          <h1 className="text-3xl font-bold">Music - INC </h1>
          <h2> Somos los reyes del mundo del entretenimiento </h2>
        </section>


        
        <section className="">
          <div className="flex items-stretch gap-5 ">
            <Image
              src="/images/4.jpg"
              alt="Slide 1"
              width={500}
              height={700}
              className="rounded-lg"
            />


            <div className="p-2 flex flex-col gap-3 relative w-full items-center">
              <h1 className="text-3xl font-bold">Escucha el mejor album del año</h1>
              <div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus nobis debitis tenetur deleniti quaerat, blanditiis laborum placeat odit iusto explicabo, minus sapiente? Libero dolorum fuga facere similique facilis minima?
                </p>
              </div>
              <a href="/login" className="bg-orange-600 p-2 rounded-xl text-center absolute bottom-3 w-full ">Comprar el album ahora</a>
            </div>

          </div>
        </section>

        <section className="">
          <Slider {...settings}>
            <Image
              src="/images/5.jpg"
              alt="Slide 1"
              width={300}
              height={400}
              className="rounded-lg"
            />
             <Image
              src="/images/3.jpg"
              alt="Slide 1"
              width={300}
              height={400}
              className="rounded-lg"
            />
             <Image
              src="/images/2.jpg"
              alt="Slide 1"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </Slider>
        </section>






      </main>

    </>

  );
}
