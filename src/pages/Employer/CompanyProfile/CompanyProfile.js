import { Grid, Card, CardContent, Typography, makeStyles, Divider } from "@material-ui/core";
import { PageInner } from "@components/layout";
import Button from "../../../common/Button";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
import AuthorizedPerson from "./AuthorizedPerson";
import { labels } from "../../../common/labels";

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    textAlign: "left",
    font: "normal normal bold 26px/28px Roboto",
    letterSpacing: "0px",
    color: "#009CCD",
    opacity: 1,
  },
  compRegInfor: {
    marginTop: "13px"
  },
  captionAndValueContainer: {
    marginBottom: 20
  },
  subtitleCaption: {
    textAlign: "left",
    font: "normal normal normal 13px/15px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
    marginBottom: "6px"
  },
  textValue: {
    textAlign: "left",
    font: "normal normal medium 16px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  supportingDocsLabel: {
    textAlign: "left",
    font: "normal normal bold 14px/16px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  supportingDocsValue: {
    textAlign: "left",
    font: "normal normal medium 14px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  }
}));

const supportingDocuments = [
  { id: 1, fileName: "Filename upload 00001.pdf" },
  { id: 2, fileName: "Filename upload 00002.pdf" },
  { id: 3, fileName: "Filename upload 00003pdf" },
  { id: 4, fileName: "Filename upload 00004.pdf" },
  { id: 5, fileName: "Filename upload 00005.pdf" },
];

const AuthPerson = [
  { id: 1, lastNameEng: "Wong", firstNameEng: "Joe", lastNameChi: "-", firstNameChi: "-" },
  { id: 1, lastNameEng: "Uy", firstNameEng: "Ben", lastNameChi: "-", firstNameChi: "-" },
  { id: 1, lastNameEng: "Wu", firstNameEng: "Jov", lastNameChi: "-", firstNameChi: "-" },
  { id: 1, lastNameEng: "Lee", firstNameEng: "Leng", lastNameChi: "-", firstNameChi: "-" },
];

const CompanyProfile = () => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "button"]);
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={[classes.titleLabel, classes.compRegInfor]}>
                    {labels.companyRegistrationInfo}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.companyNameEng} dd="Great Company Limited" />
                      <Definition.Item dt={labels.companyNameChi} dd="-" />
                      <Definition.Item dt={labels.typeOfCompany} dd="-" />
                      <Definition.Item dt={labels.dateOfIncorporation} dd="2010/04/21" />
                      <Definition.Item dt={labels.placeOfIncorporation} dd="Hongkong" />
                      <Definition.Item dt={labels.registrationType} dd="-" />
                      <Definition.Item dt={labels.registrationNumber} dd="09176932536" />
                      <Definition.Item dt={labels.branchName} dd="42" />
                      <Definition.Item dt={labels.natureOfBusiness} dd="IT" />
                      <Definition.Item dt={labels.preferredLanguage} dd="English" />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.address}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={6}>
                    <Definition.List>
                      <Definition.Item dt={labels.registeredOfficeAddress} dd="RM 307, Man Tai Building, 31 Lok Man Street, Tai Po, NT" />
                      <Definition.Item dt={labels.businessAddress} dd="Same as Correspndense Address" />
                      <Definition.Item dt={labels.correspondenceAddress} dd="Same as Correspndense Address" />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.authorizedPerson}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthorizedPerson AuthPerson={AuthPerson} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.primaryContactPerson}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.last_name} dd="Chan" />
                      <Definition.Item dt={labels.first_name} dd="Carmen" />
                      <Definition.Item dt={labels.nameTitle} dd="Ms." />
                      <Definition.Item dt={labels.jobTitle} dd="Admin" />
                      <Definition.Item dt={labels.telephoneNumber} dd="+852 4634 4773" />
                      <Definition.Item dt={labels.mobilePhoneNumber} dd="+852 4634 4773" />
                      <Definition.Item dt={labels.emailAddress} dd="carmen.chan@gmail.com" />
                      <Definition.Item dt={labels.preferredLanguage} dd="English" />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.secondaryContactPerson}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.last_name} dd="Chan" />
                      <Definition.Item dt={labels.first_name} dd="Carmen" />
                      <Definition.Item dt={labels.nameTitle} dd="Ms." />
                      <Definition.Item dt={labels.jobTitle} dd="Admin" />
                      <Definition.Item dt={labels.telephoneNumber} dd="+852 4634 4773" />
                      <Definition.Item dt={labels.mobilePhoneNumber} dd="+852 4634 4773" />
                      <Definition.Item dt={labels.emailAddress} dd="carmen.chan@gmail.com" />
                      <Definition.Item dt={labels.preferredLanguage} dd="English" />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.titleLabel}>
                    {labels.supportingDocs}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="space-between" style={{ backgroundColor: '' }}>
                    <Grid className={classes.supportingDocsLabel}>{labels.fileName}</Grid>
                    <Grid className={classes.supportingDocsLabel}>{labels.view}</Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    {
                      supportingDocuments.map((item, index) => (
                        <CompanySupportingDocs item={item} key={index} classes={classes} />
                      ))
                    }
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </PageInner >
  );
};

export default CompanyProfile;
