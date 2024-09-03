import Image from "next/image";
import Carousel from "./carousel";
import HomeLogoImg from "/public/assets/images/home/home-logo.png";
import styles from "@/styles/pages/home/_HomeCarouselArea.module.scss";

export default function CarouselContents() {
  return (
    <div className={styles.home__carouselArea}>
      <figure className={styles.home__brand}>
        <Image src={HomeLogoImg} alt="Home Logo" />
      </figure>
      <Carousel />
    </div>
  );
}
