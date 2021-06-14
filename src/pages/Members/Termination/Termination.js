import React, { useState, useEffect } from "react";
import { Page } from "@containers";
import EmployeeDetails from "./terminationdetails/EmployeeDetails";
import { useParams } from "react-router-dom";
import TerminationRoutes from "./TerminationRoutes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Termination = (props) => {
  const { id } = useParams();
  const {
    loadTermReason,
    loadEmpSchemes,
    isLoading,
    error,
    loadPayMethod,
    loadBankList,
    loadClntBnkInfo,
  } = props;

  useEffect(() => {
    loadEmpSchemes({ accountNumber: id });
    loadBankList();
    loadPayMethod();
    loadClntBnkInfo({ clntUuid: "5B41559B-A087-4279-8E2A-2C041E308B47" });
    loadTermReason();

    // eslint-disable-next-line
  }, []);

  return (
    <Page>
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
    </Page>
  );
};

export default Termination;
