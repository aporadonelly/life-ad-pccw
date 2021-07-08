import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { createRoutes } from "@components/misc";
import { enrollmentRoutes } from "@routes/employers";

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

const routes = createRoutes(enrollmentRoutes);

const Enrollment = (props) => {
  const { companyRegInfo } = props;
  const { ldRegCmpnyInfoforAdmnPrtlProjection } = companyRegInfo;

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
      <PageInner>{routes}</PageInner>
    </Page>
  );
};

Enrollment.defaultProps = {
  companyRegInfo: {},
};

export default Enrollment;
