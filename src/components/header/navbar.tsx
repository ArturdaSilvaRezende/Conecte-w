"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdGridOn } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { KanitBlack } from "@/fonts/index";
import { FaBars } from "react-icons/fa6";
import styles from "@/styles/components/header/_HeaderContents.module.scss";
import "@/styles/animations.css";

export default function Navbar() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const menuNavbarRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    if (
      isToggleMenu === false &&
      menuNavbarRef.current &&
      menuContainerRef.current
    ) {
      menuNavbarRef.current.style.display = "block";
      menuNavbarRef.current.classList.remove("fadeOut");
      menuContainerRef.current.classList.remove("slideOutRight");
      menuContainerRef.current.classList.add("slideInRight");
      menuNavbarRef.current.classList.add("fadeIn");
      setIsToggleMenu(true);
    }
  };

  const hideMenu = () => {
    if (
      isToggleMenu === true &&
      menuNavbarRef.current &&
      menuContainerRef.current
    ) {
      menuContainerRef.current.classList.remove("slideInRight");
      menuNavbarRef.current.classList.remove("fadeIn");
      menuContainerRef.current.classList.add("slideOutRight");
      menuNavbarRef.current.classList.add("fadeOut");

      setTimeout(() => {
        if (menuNavbarRef.current) menuNavbarRef.current.style.display = "none";
      }, 900);

      setIsToggleMenu(false);
    }
  };

  const handleResize = () => {
    if (menuNavbarRef.current && menuContainerRef.current) {
      if (window.innerWidth >= 1025) {
        menuNavbarRef.current.classList.remove("fadeOut");
        menuContainerRef.current.classList.remove("slideOutRight");
        menuNavbarRef.current.style.display = "block";
      } else {
        menuNavbarRef.current.style.display = "none";
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.header__navbar}>
      <div className={styles.menu} ref={menuNavbarRef}>
        <div className={styles.menu__container} ref={menuContainerRef}>
          <div className={styles.menu__header}>
            <div className={styles.menu__logo}>
              <Link href="/">
                <span className={KanitBlack.className}>conecte</span>
                <span>/w</span>
              </Link>
            </div>
            <button onClick={hideMenu}>
              <MdClose />
            </button>
          </div>

          <ul>
            <li>
              <Link href="/modulos">
                <span>
                  <MdGridOn />
                </span>
                <span>Módulos</span>
              </Link>
            </li>
            <li>
              <Link href="/gestao">
                <span>
                  <FaGear />
                </span>
                <span>Gestão</span>
              </Link>
            </li>
            <li>
              <Link href="/home/suporte">
                <span>
                  <IoChatbubbleOutline />
                </span>
                <span>Suporte</span>
              </Link>
            </li>
            <li>
              <Link href="/ajuda">
                <span>
                  <IoIosHelpBuoy />
                </span>
                <span>Ajuda</span>
              </Link>
            </li>
            <li>
              <span>
                <FaUser />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <button className={styles.menu__btn_toggle} onClick={showMenu}>
        <FaBars />
      </button>
    </nav>
  );
}
