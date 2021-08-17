import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enquiriesRoutes } from "@routes/employers";

const Enquiries = () => {
  const { t } = useTranslation(["typography"]);

  const tabs = useMemo(
    () => [
      {
        name: t("typography:tabs.enrollmentEnquiries"),
        path: "/employers/enquiries",
        redirect: "/employers/enquiries/search",
        tab: true,
      },
      {
        name: t("typography:tabs.contribution"),
        path: "/employers/contribution",
        tab: true,
      },
    ],
    [t]
  );

  return (
    <>
      <PageHeader routes={tabs} />
      <PageInner>{createRoutes(enquiriesRoutes)}</PageInner>
    </>
  );
};

export default Enquiries;
