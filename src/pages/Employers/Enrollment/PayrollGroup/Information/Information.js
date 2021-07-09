import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Definition } from "@components/misc";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const Information = ({ props }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  // const { authorizedPerson, residentialAddress, telephone, mobile } = props;
  // const {
  //   idTypId,
  //   lastName,
  //   firstName,
  //   chineseLastName,
  //   chineseFirstName,
  //   jbPstnTxt,
  //   cntryTypNm,
  //   authPrsnContactList,
  // } = authorizedPerson;

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
                      dd="PG01"
                    />
                    <Definition.Item
                      dt={t("form:label.payrollGroupName")}
                      dd="General Staff"
                    />
                    <Definition.Item
                      dt={t("form:label.contributionFrequency")}
                      dd="Monthly"
                    />
                    <Definition.Item
                      dt={t("form:label.commencementDate")}
                      dd="0106/2019"
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition xs={12}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.contributionDay")}
                      dd="The day on which the relevant income for the relevant contribution period is paid to the casual employee or the next working day subsequent to the pay day."
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.paymentMethod")}
                      dd="The day on which relevant"
                    />
                    <Definition.Item
                      dt={t("form:label.contributionBillGenerationDate")}
                      dd="Thelevant"
                    />
                  </Definition.List>
                </Definition>
              </Grid>

              <Grid item xs={12}>
                <Definition l={12}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.preprintedRemittanceStatementOption")}
                      dd="The day on which the relevant income for the relevant contribution period is paid"
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
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          name="default"
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
                          name="voluntary"
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
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
                      dd="The day on which the relevant income for the"
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

// AuthorizedPerson.defaultProps = {
//   authorizedPerson: {},
//   telephone: {},
//   mobile: {},
// };

export default Information;
