import Image from "next/image";
import BlogTitle from "./title";
import RegisterIconImage from "/public/assets/images/home/register-icon.png";
import FinancialIconImage from "/public/assets/images/home/financial-icon.png";
import OtherAppsIconImage from "/public/assets/images/home/other-apps-icon.png";
import BloodBankIconImage from "/public/assets/images/home/blood-bank-icon.png";
import styles from "@/styles/pages/home/_HomeBlog.module.scss";

export default function NewThing() {
  return (
    <div className={styles.blog__newThing}>
      <BlogTitle title="Novidades" />
      <div className={styles.newThing__container}>
        {/* Register */}
        <figure>
          <Image src={RegisterIconImage} alt="Cadastro - Ícone" />
          <figcaption>
            <p>Cadastro</p>
            <p>Nova Permissão</p>
          </figcaption>
        </figure>

        {/* Financial */}
        <figure>
          <Image src={FinancialIconImage} alt="Financeiro - Ícone" />
          <figcaption>
            <p>Financeiro</p>
            <p>
              Nova opção no relatório Rateio de Despesas - Regime de Competência
            </p>
          </figcaption>
        </figure>

        {/* Other App */}
        <figure>
          <Image src={OtherAppsIconImage} alt="Outros Aplicativos - Ícone" />
          <figcaption>
            <p>Outros Aplicativos</p>
            <p>Nova Coluna</p>
          </figcaption>
        </figure>

        {/* Blood Bank */}
        <figure>
          <Image src={BloodBankIconImage} alt="Banco de Sangue - Ícone" />
          <figcaption>
            <p>Banco de Sangue/Ag. Transfuncional</p>
            <p>Layout Ajustado</p>
          </figcaption>
        </figure>

        {/* Financial */}
        <figure>
          <Image src={FinancialIconImage} alt="Financeiro - Ícone" />
          <figcaption>
            <p>Financeiro</p>
            <p>Novo Relatório</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
