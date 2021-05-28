import React, { useEffect } from "react";
import { AuthWrapper } from "@hocs";
import EmployeeDetails from "@components/employeedetail/EmployeeDetails";
import { useParams } from "react-router-dom";
import { PageHeader } from "@components/layout";
import TerminationRoutes from "./TerminationRoutes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Termination = (props) => {
  const { loadTermReason, loadEmpSchemes, isLoading, error } = props;
  const { id } = useParams();
  useEffect(() => {
    loadTermReason();
    loadEmpSchemes({ accountNumber: id });
  }, []);
  return (
    <>
      <TerminationRoutes {...props} />
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
          <EmployeeDetails {...props} />
        </>
      )}
    </>
  );
};

export default Termination;
