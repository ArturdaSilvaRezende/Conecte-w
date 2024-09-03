import Link from "next/link";
import { KanitBlack } from "@/fonts/index";
import Navbar from "./navbar";
import styles from "@/styles/components/header/_HeaderContents.module.scss";

export default function Contents() {
  return (
    <div className={styles.header__contents}>
      <div className={styles.header__logo}>
        <Link href="/">
          <span className={KanitBlack.className}>conecte</span>
          <span>/w</span>
        </Link>
        <p>Santa Cada de Misericórdia de Goiânia</p>
      </div>

      <span className={styles.header__cutConer}></span>

      <Navbar />
    </div>
  );
}
