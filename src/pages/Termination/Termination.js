import React, { useEffect } from "react";
import { AuthWrapper } from "@hocs";
import EmployeeDetails from "./terminationdetails/EmployeeDetails";
import { useParams } from "react-router-dom";
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
    // eslint-disable-next-line
  }, []);
  return (
    <>
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
          <TerminationRoutes {...props} />
          <EmployeeDetails {...props} />
        </>
      )}
    </>
  );
};

export default Termination;
