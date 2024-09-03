import Image from "next/image";
import LogoImage from "/public/assets/images/login/logo-footer.png";
import styles from "@/styles/components/footer/_Footer.module.scss";

export default function Footer() {
  const date = new Date();
  const getFullYear = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Image src={LogoImage} alt="Logotipo - conecte" />
        <p>
          <span>©</span>
          <span>{getFullYear}</span>
          Wareline do Brasil - Sistema Hospitalar de Gestão e Faturamento
        </p>
      </div>
    </footer>
  );
}
