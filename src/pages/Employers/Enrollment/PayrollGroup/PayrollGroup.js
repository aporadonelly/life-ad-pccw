import React from "react";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Information from "./Information";
import ContactPersonList from "./ContactPersonList";
import GradeList from "./GradeList";

const PayrollGroup = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Information />
      </Grid>
      <Grid item xs={12}>
        <ContactPersonList />
      </Grid>
      <Grid item xs={12}>
        <GradeList />
      </Grid>
    </Grid>
  );
};

export default PayrollGroup;
