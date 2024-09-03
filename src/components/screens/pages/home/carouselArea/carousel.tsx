"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { CarouselList } from "./carouselList";
import styles from "@/styles/pages/home/_HomeCarouselArea.module.scss";

export default function Carousel() {
  const list = CarouselList;

  return (
    <div className={styles.home__carousel}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={true}
        navigation={{
          nextEl: ".swiper-carousel-button-next",
          prevEl: ".swiper-carousel-button-prev",
        }}
        autoplay={{
          delay: 4500,
        }}
        className={styles.mySwiper}
      >
        {list.map((slide) => (
          <SwiperSlide key={slide.id}>
            <figure>
              <Image
                src={slide.src}
                alt={slide.alt}
                height={400}
                width={900}
                priority
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.carousel__buttons}>
        <button className="swiper-carousel-button-prev">
          <IoMdArrowRoundBack />
        </button>
        <button className="swiper-carousel-button-next">
          <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
}
