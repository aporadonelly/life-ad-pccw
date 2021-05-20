import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Container,
} from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useHistory } from "react-router-dom";
import EmployeeStyles from "../../components/employees/styles/EmployeeStyles";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Formik } from "formik";
import { Form } from "@components/common";

const MemberSearch = () => {
  const classes = EmployeeStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Container>
                <Formik
                // initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography
                          className={classes.label}
                          style={{ marginBottom: 20 }}
                          variant="h6"
                          color="primary"
                        >
                          {t("typography:heading.memberEnquiry")}
                        </Typography>
                        <Grid item xs={6}>
                          <Form.Input
                            label={t("form:label.mpfId")}
                            // onChange={handleInputChange}
                            name="mpf_id"
                            type="text"
                            id="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            // value={mpf_id}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageInner>
  );
};
export default MemberSearch;
