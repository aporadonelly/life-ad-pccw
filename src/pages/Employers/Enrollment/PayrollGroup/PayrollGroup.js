import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Information from "./Information";
import ContactPersonList from "./ContactPersonList";
import GradeList from "./GradeList";
import { useTranslation } from "react-i18next";

const PayrollGroup = ({ push }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  // useEffect(() => {
  //   push();
  // }, [push]);

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
      <Grid item xs={12} align="right">
        <Button
          data-testid="back-btn"
          onClick={() => push("/employers/enrollment/information")}
        >
          {t("button:back")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PayrollGroup;
