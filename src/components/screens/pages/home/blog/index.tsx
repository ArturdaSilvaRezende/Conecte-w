import NewPoll from "./newPoll";
import News from "./news";
import NewThing from "./newThing";
import styles from "@/styles/pages/home/_HomeBlog.module.scss";

export default function HomeBlog() {
  return (
    <section className={styles.home__blog}>
      <News />
      <NewThing />
      <NewPoll />
    </section>
  );
}
