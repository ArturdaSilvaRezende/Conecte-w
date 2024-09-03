import TopCutCorner from "./topCutConer";
import LoginContents from "./contents";
import Footer from "@/components/footer";
import styles from "@/styles/login/_Login.module.scss";

export default function ComponentLogin() {
  return (
    <section className={styles.login}>
      <TopCutCorner />
      <LoginContents />
      <Footer />
    </section>
  );
}
