import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import NavbarPages from "@/components/navbar-pages";
import { NavbarLinksList } from "@/components/screens/pages/suporte/navbarList";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Navbarlist = NavbarLinksList;

  return (
    <section>
      <NavbarPages list={Navbarlist} hrefSessionName="suporte">
        <HiChatBubbleOvalLeft />
        <p>Suporte</p>
      </NavbarPages>
      {children}
    </section>
  );
}
