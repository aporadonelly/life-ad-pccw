import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enrollmentRoutes } from "@routes/employers";

const routes = createRoutes(enrollmentRoutes);

const Enrollment = (props) => {
  const { employer } = props;
  const { t } = useTranslation(["typography"]);

  const tabs = useMemo(
    () => [
      {
        name: t("typography:tabs.companyRegistrationInformation"),
        path: "/employers/registration",
        redirect: "/employers/registration/information",
        tab: true,
      },
      {
        name: t("typography:tabs.employerEnrollmentInformation"),
        path: "/employers/enrollment",
        redirect: "/employers/enrollment/information",
        tab: true,
      },
    ],
    [t]
  );

  return (
    <>
      <PageHeader routes={tabs}>
        {employer && (
          <>
            <PageHeader.SubjectInfo
              subject={employer?.companyName}
              info={{
                [t("typography:subjectInfo.eMPF")]: employer?.branches?.[0]
                  ?.enrollments?.[0]?.employer?.employerNo,
              }}
            />
            <PageHeader.SubjectInfo
              subject={employer?.branches?.[0]?.branchName}
            />
          </>
        )}
      </PageHeader>
      <PageInner>{routes}</PageInner>
    </>
  );
};

Enrollment.defaultProps = {
  employer: {},
};

export default Enrollment;
