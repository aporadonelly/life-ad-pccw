import EmployerSchemes from "@pages/Employers/Enrollment/EmployerSchemes";
import EmployerEnrollmentInformation from "@pages/Employers/Enrollment/EmployerEnrollmentInformation";
import AuthorizedPerson from "@pages/Employers/Enrollment/AuthorizedPerson";
import BeneficialOwner from "@pages/Employers/Enrollment/BeneficialOwner";
import Director from "@pages/Employers/Enrollment/Director";
import Partner from "@pages/Employers/Enrollment/Partner";
import PayrollGroup from "@pages/Employers/Enrollment/PayrollGroup";
import PayrollGroupContactPerson from "@pages/Employers/Enrollment/PayrollGroupContactPerson";
import Grade from "@pages/Employers/Enrollment/Grade";
import SelfCertification from "@pages/Employers/Enrollment/SelfCertification";

const enrollmentRoutes = [
  {
    name: "Employer Schemes",
    path: "/employers/enrollment/:companyName/schemes",
    exact: true,
    component: EmployerSchemes,
    tab: false,
  },
  {
    name: "Employer Enrollment Information",
    path: "/employers/enrollment/:companyName/schemes/:schmUuid/information",
    component: EmployerEnrollmentInformation,
    exact: true,
    tab: false,
  },
  {
    name: "Employer Enrollment Authorized Person",
    path:
      "/employers/enrollment/:companyName/schemes/:schmUuid/authorized-person/:clntUuid",
    component: AuthorizedPerson,
    tab: false,
  },
  {
    name: "Employer Enrollment Beneficial Owner",
    path:
      "/employers/enrollment/:companyName/schemes/:schmUuid/beneficial-owner/:clntUuid",
    component: BeneficialOwner,
    tab: false,
  },
  {
    name: "Employer Enrollment Director",
    path:
      "/employers/enrollment/:companyName/schemes/:schmUuid/director/:clntUuid",
    component: Director,
    tab: false,
  },
  {
    name: "Employer Enrollment Partner",
    path:
      "/employers/enrollment/:companyName/schemes/:schmUuid/partner/:clntUuid",
    component: Partner,
    tab: false,
  },
  {
    name: "Payroll Group",
    path:
      "/employers/enrollment/:companyName/schemes/:schmUuid/payroll-group/:payrollGroupId",
    component: PayrollGroup,
    exact: true,
    tab: false,
  },
  {
    name: "Payroll Group Contact Person",
    path:
      "/employers/enrollment/:companyName/payroll-group/:payrollGroupId/contact-person/:cntctPrsnUuid",
    component: PayrollGroupContactPerson,
    tab: false,
  },
  {
    name: "Grade",
    path:
      "/employers/enrollment/:companyName/payroll-group/:payrollGroupId/grade/:gradeId",
    component: Grade,
    tab: false,
  },
  {
    name: "Self Certification",
    path: "/employers/enrollment/:companyName/self-certification",
    component: SelfCertification,
    tab: false,
  },
];

export default enrollmentRoutes;
