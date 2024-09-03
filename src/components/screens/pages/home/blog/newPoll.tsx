import styles from "@/styles/pages/home/_HomeBlog.module.scss";

export default function NewPoll() {
  return (
    <div className={styles.blog__newPoll}>
      <div className={styles.newPoll__container}>
        <div className={styles.newPoll__title}>
          <p>Enquete</p>
        </div>
        <div className={styles.newPoll__cutCorner}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <form>
          <input type="text" />
          <button>Mais Enquetes</button>
        </form>
      </div>
    </div>
  );
}
