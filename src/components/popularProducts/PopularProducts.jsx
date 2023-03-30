import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import SectionTitle from "../section-title/SectionTitle";
import PopularProductCard from "./PopularProductCard";

const popularProducts = [
  {
    name: "Terno de tela",
    img: "https://us.123rf.com/450wm/prometeus/prometeus2101/prometeus210100755/162524944-hombre-modelo-de-moda-con-cabello-oscuro-posando-en-el-estudio-con-ropa-elegante-en-un-fondo-gris.jpg?ver=6",
    price: 80,
  },
  {
    name: "Chompa de manga larga",
    img: "https://img.freepik.com/fotos-premium/retrato-moda-mujer-joven-ropa-elegante-calle_338491-5347.jpg?w=2000",
    price: 40,
  },
  {
    name: "Vestido negro ",
    img: "https://img.freepik.com/foto-gratis/linda-chica-joven-peinado-ondulado-oscuro-maquillaje-brillante-vestido-seda-chaqueta-negra-sosteniendo-gafas-sol-manos-mirando-otro-lado-contra-pared-edificio-beige_197531-24462.jpg?w=2000",
    price: 100,
  },
  {
    name: "Vestido de verano",
    img: "https://i.pinimg.com/564x/b7/3f/d9/b73fd9c4784a5bcb7dcc56b4b860e34a.jpg",
    price: 120,
  },
  {
    name: "Vestido de negro brillante",
    img: "https://ae01.alicdn.com/kf/HTB1YP.mOxYaK1RjSZFnq6y80pXaA/Mini-vestido-de-fiesta-corto-a-la-moda-para-mujer-vestido-sin-tirantes-de-l-nea.jpg_640x640.jpg",
    price: 120,
  },
];

const PopularProducts = () => {
  return (
    <section className="md:w-[80%] sm:w-[80%] w-full mx-auto ">
      <SectionTitle title={"Productos populares"} />
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
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
        {popularProducts?.map((popular, index) => (
          <SwiperSlide key={index}>
            <PopularProductCard popular={popular} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularProducts;
