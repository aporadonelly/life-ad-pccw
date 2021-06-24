import { PageHeader } from "@components/layout";
import { membersRoutes } from "@routes";
import replaceNull from "./replaceNull";

const TerminationRoutes = (props) => {
  const empSubject = replaceNull(props.clientSchemes);
  let subjInfoName,
    subjAccountID,
    subjAccountNo,
    subjCompanyName,
    subjEmployerNumber,
    subjSchemeName;
  if (empSubject) {
    subjInfoName = empSubject.firstName + " " + empSubject.lastName;
    subjAccountID = empSubject.empfNumber;
    subjAccountNo = empSubject.accountNumber;
    subjCompanyName = empSubject.companyName;
    subjEmployerNumber = empSubject.employerNumber;
    if (empSubject.length === undefined) {
      subjSchemeName = empSubject.schemes[0].schemeName;
    }
  }
  return (
    <>
      <PageHeader routes={membersRoutes}>
        <PageHeader.SubjectInfo
          subject={subjInfoName}
          info={{
            "eMDF ID:": subjAccountID,
            "Member No.": subjAccountNo,
          }}
        />
        <PageHeader.SubjectInfo
          subject={subjCompanyName}
          info={subjEmployerNumber}
        />
        <PageHeader.SubjectInfo subject={subjSchemeName} />
      </PageHeader>
    </>
  );
};

export default TerminationRoutes;
