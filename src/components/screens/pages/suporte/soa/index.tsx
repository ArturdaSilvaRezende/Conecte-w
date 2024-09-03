"use client";
import { useState } from "react";
import SoaContents from "./contents";
import NovaSolicitacaoComponent from "./novasolicitacao";
import styles from "@/styles/pages/suporte/soa/Soa.module.scss";

export default function SoaComponent() {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

  const renderComponent = () => {
    switch (activeTab) {
      case "tab1":
        return <SoaContents setActiveTab={setActiveTab} />;
      case "tab2":
        return <NovaSolicitacaoComponent setActiveTab={setActiveTab} />;
      default:
        return null;
    }
  };

  return <div className={styles.soa}>{renderComponent()}</div>;
}
