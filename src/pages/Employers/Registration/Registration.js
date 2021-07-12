import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { registrationRoutes } from "@routes/employers";

const tabs = [
  {
    name: "Company Registration Information",
    path: "/employers/registration",
    redirect: "/employers/registration/information",
    tab: true,
  },
  {
    name: "Employer Enrollment Information",
    path: "/employers/enrollment",
    redirect: "/employers/enrollment/information",
    tab: true,
  },
];

const routes = createRoutes(registrationRoutes);

const Registration = (props) => {
  const { companyRegInfo } = props;
  const { ldRegCmpnyInfoforAdmnPrtlProjection } = companyRegInfo;
  const empfID =
    ldRegCmpnyInfoforAdmnPrtlProjection?.client?.clientRelationships?.[0]
      ?.enttyCd;

  return (
    <Page>
      <PageHeader routes={tabs}>
        <PageHeader.SubjectInfo
          subject={ldRegCmpnyInfoforAdmnPrtlProjection?.cmpnyNm}
          info={{ "Employer eMPF ID :": empfID }}
        />
        <PageHeader.SubjectInfo
          subject={ldRegCmpnyInfoforAdmnPrtlProjection?.branches?.[0]?.brnchNm}
        />
      </PageHeader>
      <PageInner>{routes}</PageInner>
    </Page>
  );
};

Registration.defaultProps = {
  companyRegInfo: {},
};

export default Registration;
