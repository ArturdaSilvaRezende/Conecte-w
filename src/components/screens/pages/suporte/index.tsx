import BreadcrumbArea from "@/components/breadcrumb-area";
import SupportContents from "./contents";

export default function SupportsComponent() {
  return (
    <div>
      <BreadcrumbArea>
        <h1>Suporte</h1>
      </BreadcrumbArea>
      <SupportContents />
    </div>
  );
}
