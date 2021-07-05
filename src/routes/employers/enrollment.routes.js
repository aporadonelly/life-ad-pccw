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
    path: "/employers/enrollment/schemes",
    component: EmployerSchemes,
    tab: false,
  },
  {
    name: "Employer Enrollment Information",
    path: "/employers/enrollment/information",
    component: EmployerEnrollmentInformation,
    tab: false,
  },
  {
    name: "Authorized Person",
    path: "/employers/enrollment/authorized-person",
    component: AuthorizedPerson,
    tab: false,
  },
  {
    name: "Beneficial Owner",
    path: "/employers/enrollment/beneficial-owner",
    component: BeneficialOwner,
    tab: false,
  },
  {
    name: "Beneficial Owner",
    path: "/employers/enrollment/beneficial-owner",
    component: BeneficialOwner,
    tab: false,
  },
  {
    name: "Director",
    path: "/employers/enrollment/director",
    component: Director,
    tab: false,
  },
  {
    name: "Partner",
    path: "/employers/enrollment/partner",
    component: Partner,
    tab: false,
  },
  {
    name: "Payroll Group",
    path: "/employers/enrollment/payroll-group",
    component: PayrollGroup,
    tab: false,
  },
  {
    name: "Payroll Group",
    path: "/employers/enrollment/payroll-group-contact-person",
    component: PayrollGroupContactPerson,
    tab: false,
  },
  {
    name: "Payroll Group",
    path: "/employers/enrollment/grade",
    component: Grade,
    tab: false,
  },
  {
    name: "Self Certification",
    path: "/employers/enrollment/self-certification",
    component: SelfCertification,
    tab: false,
  },
];

export default enrollmentRoutes;
