import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { Formik } from "formik";
import { Form } from "@components/common";
import { useTranslation } from "react-i18next";

const MemberSearch = () => {
  const { t } = useTranslation(["typography", "form", "button"]);

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Formik
              // initialValues={initialValues}
              // validationSchema={validationSchema}
              // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.memberEnquiry")}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.mpfId")}
                        // onChange={handleInputChange}
                        name="mpf_id"
                        type="text"
                        id="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                        // value={mpf_id}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.personalInformation")}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.displayName")}
                        // onChange={handleInputChange}
                        name="mpf_id"
                        type="text"
                        id="text"
                        placeholder={t(
                          "form:placeholder.custom.inputEnglishName"
                        )}
                        // value={mpf_id}
                      />
                    </Grid>{" "}
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.chineseName")}
                        // onChange={handleInputChange}
                        name="mpf_id"
                        type="text"
                        id="text"
                        placeholder={t(
                          "form:placeholder.custom.inputChineseName"
                        )}
                        // value={mpf_id}
                      />
                    </Grid>{" "}
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.gender")}
                        // onChange={handleInputChange}
                        name="mpf_id"
                        type="text"
                        id="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                        // value={mpf_id}
                      />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageInner>
  );
};

export default MemberSearch;
