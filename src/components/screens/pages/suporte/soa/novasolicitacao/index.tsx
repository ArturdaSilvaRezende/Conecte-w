import Link from "next/link";
import BreadcrumbArea from "@/components/breadcrumb-area";
import NovaSolicitacaoContents from "./contents";
import { FaArrowLeft } from "react-icons/fa";
import styles from "@/styles/pages/suporte/soa/Nova.module.scss";

type NewSolicitationBack = {
  setActiveTab: (tab: "tab1" | "tab2") => void;
};

export default function NovaSolicitacaoComponent({
  setActiveTab,
}: NewSolicitationBack) {
  return (
    <div className={styles.nova}>
      <BreadcrumbArea>
        <div className={styles.nova__breadcrump}>
          <h1>Nova Soliticação</h1>
          <div className={styles.nova__breadcrump__menu}>
            <ul>
              <li>Suport /</li>
              <li>SOA / </li>
              <li>Nova</li>
            </ul>
            <button onClick={() => setActiveTab("tab1")}>
              <span>
                <FaArrowLeft />
              </span>
              <span>Voltar</span>
            </button>
          </div>
        </div>
      </BreadcrumbArea>
      <NovaSolicitacaoContents />
    </div>
  );
}
