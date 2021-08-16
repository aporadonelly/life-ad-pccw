import { PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enquiriesRoutes } from "@routes/members";

const routes = createRoutes(enquiriesRoutes);

const Enquiries = () => {
  return <PageInner>{routes}</PageInner>;
};

export default Enquiries;
