import Image from "next/image";
import LogoImage from "/public/assets/images/brand/logo_hmo_footer.png";
import styles from "@/styles/components/footer/_Footer.module.scss";

export default function Footer() {
  const date = new Date();
  const getFullYear = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Image
          src={LogoImage}
          alt="Logotipo - conecte"
          width={700}
          height={700}
        />
        <p>
          <span>©</span>
          <span>{getFullYear}</span>
          HMO Tecnologia
        </p>
      </div>
    </footer>
  );
}
