"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRegCalendarDays } from "react-icons/fa6";
import BlogTitle from "./title";
import { BlogNewsList } from "./BlogList";
import LoadingImage from "/public/assets/images/home/loading.gif";
import styles from "@/styles/pages/home/_HomeBlog.module.scss";

export default function News() {
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const blogList = BlogNewsList;

  const loadMoreNews = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleNewsCount((prevCount) => prevCount + 3);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.blog__news}>
      <BlogTitle title="Acontece" />

      {blogList.slice(0, visibleNewsCount).map((news) => (
        <div className={styles.blog__contents} key={news.id}>
          <div className={styles.blogs__banner}>
            <span>Fora</span>
          </div>

          <div className={styles.blogs__post}>
            <p>
              <span>
                <FaRegCalendarDays />
              </span>
              <span>{news.date}</span>
            </p>
            <p>{news.news}</p>
          </div>
        </div>
      ))}

      {visibleNewsCount < blogList.length && (
        <button className={styles.blog__load} onClick={loadMoreNews}>
          Mais Notícias
        </button>
      )}

      {loading && (
        <div className={styles.blog__spinner}>
          <Image src={LoadingImage} alt="Loading Gif" />
        </div>
      )}
    </div>
  );
}
