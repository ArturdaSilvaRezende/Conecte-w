import BreadcrumbArea from "@/components/breadcrumb-area";
import HomeContents from "./contents";

export default function ComponentHome() {
  return (
    <section>
      <BreadcrumbArea>
        <h1>Olá Hugo Miranda De Oliveira</h1>
      </BreadcrumbArea>
      <HomeContents />
    </section>
  );
}
