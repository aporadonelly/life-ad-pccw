import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { employersRoutes } from "@routes";

const Contribution = () => (
  <Page>
    <PageHeader routes={employersRoutes}></PageHeader>
    <PageInner></PageInner>
  </Page>
);

export default Contribution;
