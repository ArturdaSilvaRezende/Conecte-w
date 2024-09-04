import Image from "next/image";
import { MdHealthAndSafety } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import LoginImageBg from "/public/assets/images/login/login-img-bg.png";
import styles from "@/styles/login/_Contents.module.scss";

export default function LoginContents() {
  return (
    <div className={styles.login__container}>
      <Image
        src={LoginImageBg}
        alt="Imagem de fundo / tela de login"
        width={700}
        height={700}
        priority
      />

      <div className={styles.login__contents}>
        <div className={styles.login__title}>
          <h1>HMO CHAMADOS</h1>
        </div>

        <form className={styles.login__form}>
          <div className={styles.login__fields}>
            <div className={styles.login__input}>
              <button>
                <MdHealthAndSafety />
              </button>
              <input type="text" placeholder="Código do cliente" />
            </div>
            <div className={styles.login__input}>
              <button>
                <FaUser />
              </button>
              <input type="text" placeholder="Usuário ou E-mail" />
            </div>
            <div className={styles.login__input}>
              <button>
                <RiLockPasswordFill />
              </button>
              <input type="password" placeholder="****" />
            </div>
          </div>
          <div className={styles.login__submit}>
            <button>Redefinir Senha</button>
            <button>Entrar</button>
          </div>
        </form>

        <span className={styles.point__left}></span>
        <span className={styles.point__right}></span>
        <span className={styles.point__top}></span>
      </div>
    </div>
  );
}
