import { useEffect } from "react";
import moment from "moment";
import { get } from "lodash";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { Page } from "@containers";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Definition } from "@components/misc";

const ViewMember = ({ employee }) => {
  useEffect(() => {}, [employee]);

  const {
    pnsnIdTxt,
    frstNm,
    lstNm,
    chnsFrstNm,
    chnsLstNm,
    gndrTypId,
    idTypId,
    idNoTxt,
    brthDt,
    ntnltyCntryTypCd,
    regClntPhones,
    regCntcts,
    regAddrs,
    sttsTypId,
  } = employee;
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  return (
    <Page>
      <PageInner>
        <Grid container spacing={3}>
          {/* Authorized Person */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.memberRegistrationView")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Definition spacing={2} xs={3}>
                      <Definition.List>
                        <Definition.Item
                          dt={t("form:label.mpfId")}
                          dd={pnsnIdTxt}
                        />
                      </Definition.List>
                    </Definition>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.personalInformation")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Definition spacing={2} xs={2}>
                      <Definition.List>
                        <Definition.Item
                          dt={t("form:label.title")}
                          dd={
                            gndrTypId === "GT_M"
                              ? t("form:label.male")
                              : gndrTypId === "GT_F"
                              ? t("form:label.female")
                              : "Mr/Ms"
                          }
                        />

                        <Definition.Item
                          dt={t("form:label.firstName")}
                          dd={frstNm}
                        />
                        <Definition.Item
                          dt={t("form:label.lastName")}
                          dd={lstNm}
                        />

                        <Definition.Item
                          dt={t("form:label.chineseLastName")}
                          dd={chnsLstNm}
                        />

                        <Definition.Item
                          dt={t("form:label.chineseFirstName")}
                          dd={chnsFrstNm}
                        />

                        <Definition.Item
                          dt={t("form:label.gender")}
                          dd={
                            gndrTypId === "GT_M"
                              ? "Male"
                              : gndrTypId === "GT_F"
                              ? "Female"
                              : "Both"
                          }
                        />
                        <Definition.Item
                          dt={t("form:label.idType")}
                          dd={idTypId === "ID_HK" ? "HKID" : "Passport"}
                        />
                        <Definition.Item
                          dt={t("form:label.idNumber")}
                          dd={idNoTxt}
                        />
                        <Definition.Item
                          dt={t("form:label.birthdate")}
                          dd={moment(brthDt).format("DD MMMM YYYY")}
                        />

                        <Definition.Item
                          dt={t("form:label.placeOfBirth")}
                          dd={ntnltyCntryTypCd}
                        />
                        <Definition.Item
                          dt={t("form:label.mobileNumber")}
                          dd={
                            Array.isArray(regClntPhones) &&
                            get(
                              regClntPhones.filter(
                                (v) => v.phnTypId === "TP_MB"
                              ),
                              "[0].phnNmbr"
                            )
                          }
                        />
                        <Definition.Item
                          dt={t("form:label.secondaryMobileNumber")}
                          dd={
                            Array.isArray(regCntcts) &&
                            regCntcts.map((v) => v.scndryCntctNo)
                          }
                        />
                        <Definition.Item
                          xs={8}
                          dt={t("form:label.residentialAddress")}
                          dd={
                            Array.isArray(regAddrs) &&
                            regAddrs.map((v) =>
                              v.addrTypId === "AD_R"
                                ? v.addrRmTxt +
                                  " " +
                                  v.addrFlrTxt +
                                  " " +
                                  v.addrBldngNmTxt +
                                  " " +
                                  v.addrBlckTxt +
                                  " " +
                                  v.addrStrtTxt +
                                  " " +
                                  v.addrCtyTxt +
                                  " " +
                                  v.addrDstrctTxt +
                                  " " +
                                  v.cntryTypCd
                                : null
                            )
                          }
                        />
                        <Definition.Item
                          xs={4}
                          dt={t("form:label.email")}
                          dd={get(regCntcts, "[0].emlAddrTxt")}
                        />

                        <Definition.Item
                          xs={4}
                          dt={t("form:label.correspondenceAddress")}
                          dd={
                            Array.isArray(regAddrs) &&
                            regAddrs.map((v) =>
                              v.addrTypId === "AD_C"
                                ? v.addrRmTxt +
                                  " " +
                                  v.addrFlrTxt +
                                  " " +
                                  v.addrBldngNmTxt +
                                  " " +
                                  v.addrBlckTxt +
                                  " " +
                                  v.addrStrtTxt +
                                  " " +
                                  v.addrCtyTxt +
                                  " " +
                                  v.addrDstrctTxt +
                                  " " +
                                  v.cntryTypCd
                                : null
                            )
                          }
                        />
                        <Grid item xs={12}>
                          <Typography variant="h6" color="primary">
                            {t("typography:heading.otherInformation")}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Definition spacing={2} xs={3}>
                            <Definition.List>
                              <Definition.Item
                                dt={t(
                                  "form:label.preferredCommunicationChannel"
                                )}
                                dd={
                                  get(regCntcts, "[0].cmmTypId") === "CC_EM" &&
                                  "Email"
                                }
                              />
                              <Definition.Item
                                dt={t(
                                  "form:label.preferredCommunicationLanguage"
                                )}
                                dd={
                                  get(regCntcts, "[0].lnggTypId") === "LG_EN"
                                    ? "English"
                                    : null
                                }
                              />
                              <Definition.Item
                                dt={t(
                                  "form:label.receivedPaperFormNotificationAndDocument"
                                )}
                                dd={get(regCntcts, "[0].rcvPprFlg")}
                              />
                              <Definition.Item
                                dt={t("form:label.status")}
                                dd={sttsTypId === "ST_NW" ? "New" : "Completed"}
                              />
                            </Definition.List>
                          </Definition>
                        </Grid>
                      </Definition.List>
                    </Definition>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Back Button */}
          <Grid item xs={12}>
            <Grid container component="dl" spacing={1} justify="flex-end">
              <Button
                data-testid="back-btn"
                onClick={() => history.push("/members/enquiry/result")}
              >
                {t("button:backToSearch")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </PageInner>
    </Page>
  );
};

export default ViewMember;
