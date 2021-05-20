import { Formik, FieldArray } from "formik";
import { Container, Grid } from "@material-ui/core";
import { Form } from "@components/common";

const initialValues = {
  schemes: [
    {
      id: 1,
      scheme: "BDO",
    },
    {
      id: 2,
      scheme: "China Bank",
    },
    {
      id: 3,
      scheme: "Union Bank",
    },
  ],
};

const EmployeeScheme2 = () => {
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <FieldArray
            name="schemes"
            render={({ swap, form }) => (
              <Grid container spacing={2}>
                {/* {console.log(form.values.schemes)} */}
                {form.values.schemes.map((scheme, index) => (
                  // console.log(
                  //   scheme.id,
                  //   scheme.scheme,
                  //   `schemes.${index}.id`,
                  //   form.values.schemes
                  // )
                  <Grid key={scheme.id} item xs={12}>
                    <Form.Select
                      variant="outlined"
                      size="small"
                      name={`schemes.${index}.id`}
                      data={{
                        options: form.values.schemes,
                        label: (scheme) => scheme.scheme,
                        value: (scheme) => scheme.id,
                      }}
                      onChange={(e) => {
                        swap(
                          index,
                          form.values.schemes.findIndex(
                            (v) => v.id === e.target.value
                          )
                        );
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          />
        </Form>
      </Formik>
    </Container>
  );
};

export default EmployeeScheme2;
