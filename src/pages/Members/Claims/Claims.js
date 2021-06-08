import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { membersRoutes } from "@routes";

const Claims = () => (
  <Page>
    <PageHeader routes={membersRoutes}></PageHeader>
    <PageInner></PageInner>
  </Page>
);

export default Claims;
