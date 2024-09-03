import HomeBlog from "./blog";
import CarouselContents from "./carouselArea";
import styles from "@/styles/pages/home/_Home.module.scss";

export default function HomeContents() {
  return (
    <section className={styles.home}>
      <CarouselContents />
      <HomeBlog />
    </section>
  );
}
