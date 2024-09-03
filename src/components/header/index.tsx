import Contents from "./contents";
import TopCutCorner from "./topCutCorner";
import styles from "@/styles/components/header/_Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <TopCutCorner />
      <Contents />
    </header>
  );
}
