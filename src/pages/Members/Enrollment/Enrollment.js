import { PageHeader, PageInner } from "@components/layout";
import { membersRoutes } from "@routes";

const Enrollment = () => (
  <>
    <PageHeader routes={membersRoutes}></PageHeader>
    <PageInner></PageInner>
  </>
);

export default Enrollment;
