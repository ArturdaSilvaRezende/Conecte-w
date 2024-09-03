import Footer from "@/components/footer";
import Header from "@/components/header";
import { NavbarLinksList } from "@/components/screens/pages/suporte/navbarList";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Navbarlist = NavbarLinksList;

  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
