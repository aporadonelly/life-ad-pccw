import { PageHeader, PageInner } from "@components/layout";
import { membersRoutes } from "@routes";

const Investment = () => (
  <>
    <PageHeader routes={membersRoutes}></PageHeader>
    <PageInner></PageInner>
  </>
);

export default Investment;
