"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavbarLinks } from "@/types/navbarTypes";
import { FaHome } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import Styles from "@/styles/components/navbar-pages/_NavbarPages.module.scss";
import "@/styles/animations.css";

type NavbarPagesProps = {
  list: NavbarLinks[];
  children: React.ReactNode;
  hrefSessionName: string;
};

export default function NavbarPages({
  list = [],
  children,
  hrefSessionName,
}: NavbarPagesProps) {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const pathName = usePathname();

  const isActive = (href: string) => {
    pathName.endsWith(href);
    return pathName === href ? "navbarPages__active" : "";
  };

  const handleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  const handleResize = () => {
    setIsToggleMenu(window.innerWidth >= 992);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbar__sessionBox}>
        <div className={Styles.navbar__sessionName}>{children}</div>
        <button className={Styles.navbar__handleMenu} onClick={handleMenu}>
          <span>Submenu</span>
          {!isToggleMenu ? <FaBarsStaggered /> : <MdClose />}
        </button>
      </div>

      {isToggleMenu && (
        <nav className={`${Styles.navbar__container} zoomIn`}>
          <ul>
            {/* Home */}
            <li
              className={`${
                pathName === `/home/${hrefSessionName}`
                  ? "navbarPages__active"
                  : ""
              }`}
            >
              <Link href={`/home/${hrefSessionName}`}>
                <FaHome />
              </Link>
            </li>

            {/* Other Links */}
            {list.map((link) => (
              <li
                key={link.id}
                className={`${isActive(
                  `/home/${hrefSessionName}${link.href}`
                )}`}
              >
                <Link href={`/home/${hrefSessionName}${link.href}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
