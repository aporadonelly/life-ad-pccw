import { useEffect } from "react";
const EmployerEnrollmentInformation = (props) => {
  const { enrCompanyInfo, ldEnrCmpnyInfo } = props;

  useEffect(() => {
    ldEnrCmpnyInfo({
      cmpnyUuid: "F118FE53-4D61-4CAB-9760-F36114BA1F26",
      schmUuid: "79CEF4FB-4FB8-4530-A98E-909042525776",
    });
  }, [ldEnrCmpnyInfo]);

  return <pre>{JSON.stringify(enrCompanyInfo, null, 2)}</pre>;
};

export default EmployerEnrollmentInformation;
