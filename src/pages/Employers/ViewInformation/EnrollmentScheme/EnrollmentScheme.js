import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { viewInformationRoutes } from "@routes/employers";

const EnrollmentScheme = () => (
  <Page>
    <PageHeader routes={viewInformationRoutes} />
    <PageInner></PageInner>
  </Page>
);

export default EnrollmentScheme;
