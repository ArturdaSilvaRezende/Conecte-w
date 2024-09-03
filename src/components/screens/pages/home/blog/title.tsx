import styles from "@/styles/pages/home/_HomeBlog.module.scss";

type BlogTitleType = {
  title: string;
};

export default function BlogTitle({ title }: BlogTitleType) {
  return (
    <div className={styles.blog__title}>
      <h2>{title}</h2>
      <span>.</span>
    </div>
  );
}
