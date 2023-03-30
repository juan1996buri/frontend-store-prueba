import SectionTitle from "../section-title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper";

const Testimonials = () => {
  return (
    <section className="w-[80%] mx-auto">
      <SectionTitle title={"Testimonios"} />

      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className=""
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full  md:w-full md:h-40 w-56 h-56 flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_680"
                className="h-full object-cover"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">
              Ana Sánchez
            </h3>
            <p className="text-gray-600 text-sm text-justify">
              ¡Me encanta comprar en esta tienda en línea! Siempre encuentro la
              ropa más moderna y a la moda. Además, la atención al cliente es
              excelente.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full  md:w-48 md:h-48 w-56 h-56  flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://www.hakunamatata.com.co/wp-content/uploads/2022/11/actitudes-positivas-vida.jpg"
                className="h-full object-cover"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">
              Carlos Rodríguez
            </h3>
            <p className="text-gray-600 text-sm text-justify">
              Comprar en esta tienda es una experiencia increíble. Tienen una
              amplia variedad de ropa moderna y de alta calidad a precios
              accesibles. Definitivamente recomiendo esta tienda
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full md:w-full md:h-40 w-56 h-56  flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg"
                className="h-full object-cover"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">
              Laura García
            </h3>
            <p className="text-gray-600 text-sm text-justify">
              Desde que descubrí esta tienda en línea, mi guardarropa ha
              mejorado significativamente. La ropa es cómoda, moderna y se
              ajusta perfectamente. ¡Gracias por hacer que el shopping sea tan
              fácil!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
