import Image from "next/image";
import SupportImage from "/public/assets/images/about/about-image.png";
import styles from "@/styles/pages/suporte/Support.module.scss";

export default function SupportContents() {
  return (
    <div className={styles.support}>
      <div className={styles.support__description}>
        <div className={styles.support__description__title}>
          <h2>Sobre</h2>
          <span>.</span>
        </div>

        <p>
          Nessa área você terá acesso ao SOA {"(Solicitação de Atendimento), "}
          onde poderá abrir chamados para esclarecer dúvidas ou pedir alterações
          no sistema da Wareline. Também é possível solicitar Agendamentos para
          que nossa equipe ténica vá até o seu Hospital. Além de gerenciar o
          SOS, ferramenta de gestão de chamados internos do Hospital,
          desenvolvida para auxiliar o departamento de informática.
        </p>
      </div>
      <figure className={styles.support__image}>
        <Image src={SupportImage} alt="Suporte - Image" />
      </figure>
    </div>
  );
}
