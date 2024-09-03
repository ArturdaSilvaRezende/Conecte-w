import styles from "@/styles/components/breadcrumb/BreadcrumbArea.module.scss";

export default function BreadcrumbArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.breadcrumbArea}>
      <div className={styles.breadcrumbArea__container}>{children}</div>
    </div>
  );
}
