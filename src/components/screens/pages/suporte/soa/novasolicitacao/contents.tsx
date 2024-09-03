import { FaFolderOpen } from "react-icons/fa6";
import Description from "./description";
import styles from "@/styles/pages/suporte/soa/Nova.module.scss";

export default function NovaSolicitacaoContents() {
  return (
    <div className={styles.nova__solicitation}>
      <div className={styles.nova__solicitation__container}>
        <div className={styles.nova__solicitation__container_title}>
          <p>Informações</p>
        </div>
        <form className={styles.nova__solicitation__container_form}>
          <div className={styles.nova__solicitation__container_formItem}>
            <label htmlFor="solicitante">Solicitante: </label>
            <input type="text" id="solicitante" name="solicitante" />
          </div>

          <div className={styles.nova__solicitation__container_formItem}>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" />
          </div>

          <div className={styles.nova__solicitation__container_formItem}>
            <label htmlFor="modulo">Módulo: </label>
            <select name="modulo" id="modulo">
              <option selected disabled>
                Escolha uma Opção
              </option>
            </select>
          </div>

          <div className={styles.nova__solicitation__container_formDescription}>
            <p>
              <span>Descrição </span>
              <span>(Mínimo 120 caracteres)</span>
            </p>
            <Description />
            <p
              className={
                styles.nova__solicitation__container_formDescription__totalCaracters
              }
            >
              0 caracteres digitado
            </p>
          </div>

          <div className={styles.nova__solicitation__container_formOpenFile}>
            <button>
              <span>
                <FaFolderOpen />
              </span>
              <span>Buscar Arquivo</span>
            </button>
            <p>
              Utilize este campo caso haja necessidade de enviar algum arquivo.
              Somente arquivos nos formatos GIF, JPEG e ZIP de até 1MB serão
              válidos.
            </p>
          </div>

          <button className={styles.nova__solicitation__container_formSubmit}>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
