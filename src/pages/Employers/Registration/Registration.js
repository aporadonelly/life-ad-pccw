import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { registrationRoutes } from "@routes/employers";

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

const Registration = (props) => {
  const { ldRegCmpnyInfoforAdmnPrtlProjection } = props;

  return (
    <Page>
      <PageHeader routes={tabs}>
        <PageHeader.SubjectInfo
          subject={ldRegCmpnyInfoforAdmnPrtlProjection?.cmpnyNm}
        />
        <PageHeader.SubjectInfo
          subject={ldRegCmpnyInfoforAdmnPrtlProjection?.branches?.[0]?.brnchNm}
        />
      </PageHeader>
      <PageInner>{createRoutes(registrationRoutes)}</PageInner>
    </Page>
  );
};

export default Registration;
