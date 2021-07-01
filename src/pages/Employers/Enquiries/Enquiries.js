import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enquiriesRoutes } from "@routes/employers";

const tabs = [
  {
    name: "ER Registration / Enrollment Enquiries",
    path: "/employers/enquiries",
    redirect: "/employers/enquiries/search",
    tab: true,
  },
  {
    name: "Contribution",
    path: "/employers/contribution",
    tab: true,
  },
];

const Enquiries = () => (
  <Page>
    <PageHeader routes={tabs} />
    <PageInner>{createRoutes(enquiriesRoutes)}</PageInner>
  </Page>
);

export default Enquiries;
