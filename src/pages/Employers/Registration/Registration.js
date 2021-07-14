import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { registrationRoutes } from "@routes/employers";

const routes = createRoutes(registrationRoutes);

const Registration = (props) => {
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
    <Page>
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
    </Page>
  );
};

Registration.defaultProps = {
  employer: {},
};

export default Registration;
