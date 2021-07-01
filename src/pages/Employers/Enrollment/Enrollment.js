import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enrollmentRoutes } from "@routes/employers";

const tabs = [
  {
    name: "Company Registration Information",
    path: "/employers/registration/information",
  },
  {
    name: "Employer Enrollment Information",
    path: "/employers/enrollment/information",
  },
];

const Enrollment = () => (
  <Page>
    <PageHeader routes={tabs} />
    <PageInner>{createRoutes(enrollmentRoutes)}</PageInner>
  </Page>
);

export default Enrollment;
