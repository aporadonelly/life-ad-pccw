import React from "react";
import { Formik, FieldArray } from "formik";
import { Container, Grid, Avatar } from "@material-ui/core";
import { Form } from "@components/common";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/styles";
import { labels } from "../../common/labelsList";
import { Form as FormikForm } from "@components/common";

const useStyles = makeStyles((theme) => ({
  schemeUl: {
    listStyleType: "none",
    listStylePosition: "inside",
    margin: 0,
    padding: 0,
    //listStyle: "none",
    // display: "flex",
    // marginTop: "20px",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // height: "240px",
    // alignContent: "flex-start",
  },
  schemeGrid: {
    display: "flex",
    marginTop: "20px",
    paddingRight: "28px",
  },
  // schemeBox: {
  //   flex: "0 0 300px",
  //   width: "300px",
  //   marginRight: "20px",
  //   display: "flex",
  //   justifyContent: "space-around",
  // },
  schemeAvatar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#2D9FC3",
    marginRight: "23px",
  },
}));

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

const EmployeeScheme4 = (props) => {
  const classes = useStyles();
  let circleId = 0;
  //console.log("schemes", props.schemes);
  //console.log("schemes1", initialValues);
  return (
    <>
      {/* <Formik initialValues={props.schemes} onSubmit={() => {}}>
        <Form> */}
      <FieldArray
        name={props.name}
        render={({ swap, form }) => (
          <Grid spacing={2}>
            {/* {console.log(form.values.schemes)} */}
            <div className={classes.labels}>{labels.schemeTitle}</div>
            {form.values.schemes.map((scheme, index) => (
              // console.log(
              //   scheme.id,
              //   scheme.scheme,
              //   `schemes.${index}.id`,
              //   form.values.schemes
              // )
              // <Grid key={scheme.id} item xs={12}>

              <Grid item sm={7} xs={12} className={classes.schemeGrid}>
                {console.log((circleId = index + 1))}
                <Avatar className={classes.schemeAvatar}>{circleId}</Avatar>
                <Form.Select
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
      {/* </Form>
      </Formik> */}
    </>
  );
};

export default EmployeeScheme4;
