import { PageHeader } from "@components/layout";
import { membersRoutes } from "@routes";

const TerminationRoutes = (props) => {
  const empSubject = props.clientSchemes;
  let subjInfoName = "Chan, Tai Man",
    subjAccountID = "3746474",
    subjAccountNo = "273 637 338",
    subjCompanyName = "Great Company Limited",
    subjEmployerNumber = "223344433",
    subjSchemeName = "AIA MPF - Prime Value Choice";
  if (empSubject) {
    subjInfoName = empSubject.firstName + " " + empSubject.lastName;
    subjAccountID = empSubject.accountId;
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
