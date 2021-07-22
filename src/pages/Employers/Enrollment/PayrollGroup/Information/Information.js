import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Definition } from "@components/misc";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import moment from "moment";

const Information = ({ payrollGrpInfo, ldPayrollGrpInfo }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const {
    payrollGroupCode,
    payrollGroupName,
    frequencyOptions,
    contributionDayOptions,
    commencementDate,
    paymentMethodOptions,
    contributionBillsGenerationDate,
    preprintedRemittanceOptions,
    //defaultPayrollGroup,
    voluntaryContributionOption,
    unvestedBenefitOptions,
  } = payrollGrpInfo;

  useEffect(() => {
    ldPayrollGrpInfo({
      payrollGroupId: "740DF08D-90FE-492C-9F09-8492F7218B97",
    });
  }, [ldPayrollGrpInfo]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("typography:heading.payrollGroup")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.payrollGroupCode")}
                      dd={payrollGroupCode}
                    />
                    <Definition.Item
                      dt={t("form:label.payrollGroupName")}
                      dd={payrollGroupName}
                    />
                    <Definition.Item
                      dt={t("form:label.contributionFrequency")}
                      dd={frequencyOptions?.[0]?.cstmTypDtlTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.commencementDate")}
                      dd={moment(commencementDate).format("L").toUpperCase()}
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition xs={12}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.contributionDay")}
                      dd={contributionDayOptions?.[2]?.cstmTypDtlTxt}
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.paymentMethod")}
                      dd={paymentMethodOptions?.[0]?.cstmTypDtlTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.contributionBillGenerationDate")}
                      dd={moment(contributionBillsGenerationDate)
                        .format("LL")
                        .toUpperCase()}
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition l={12}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.preprintedRemittanceStatementOption")}
                      dd={preprintedRemittanceOptions?.[0]?.cstmTypDtlTxt || ""}
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition xs={12}>
                  <Definition.List>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          //checked={defaultPayrollGroup === true}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />
                      }
                      label={t(
                        "form:label.defaultOptionofGrandTotalUnderpayment"
                      )}
                    />
                  </Definition.List>
                  <Definition.List>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checked={voluntaryContributionOption === true}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />
                      }
                      label={t(
                        "form:label.voluntaryContributionOptionandVesting"
                      )}
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition xs={12}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.voluntaryContributionUnvestedBenefit")}
                      dd={unvestedBenefitOptions?.[5]?.cstmTypDtlTxt || ""}
                    />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Information.propTypes = {
  payrollGrpInfo: PropTypes.object,
  ldPayrollGrpInfo: PropTypes.func.isRequired,
};

Information.defaultProps = {
  payrollGrpInfo: {},
  ldPayrollGrpInfo: () => {},
};
export default Information;
