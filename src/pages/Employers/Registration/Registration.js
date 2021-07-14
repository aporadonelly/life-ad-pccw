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
  const { employer } = props;

  return (
    <Page>
      <PageHeader routes={tabs}>
        {employer && (
          <>
            <PageHeader.SubjectInfo
              subject={employer?.companyName}
              info={{
                "Employer eMPF ID :":
                  employer?.branches?.[0]?.enrollments?.[0]?.employer
                    ?.employerNo,
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
