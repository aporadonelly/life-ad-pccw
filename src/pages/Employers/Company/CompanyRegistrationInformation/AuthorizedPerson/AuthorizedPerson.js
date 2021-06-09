import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";

const AuthorizedPerson = () => (
  <Page>
    <PageHeader routes={companyRoutes} />
    <PageInner></PageInner>
  </Page>
);

export default AuthorizedPerson;
