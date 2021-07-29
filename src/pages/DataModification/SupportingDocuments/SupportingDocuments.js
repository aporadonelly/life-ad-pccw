import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { Form } from "@components/common";
import * as yup from "yup"; // validator for objects // input form
import { Grid, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: "1px solid black",
    margin: theme.spacing(1, 0),
    width: 100,
    display: "flex",
    justifyContent: "center",
    height: 100,
    alignItems: "center",
  },
  dropzoneOthers: {
    flexWrap: "wrap",
    border: "1px solid black",
    margin: theme.spacing(1, 0),
    width: "100%",
    minHeight: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadArea: {
    margin: 15,
  },
  gridItem: {
    backgroundColor: "#ede8e8",
  },
}));

const initialValues = {
  hkid: [],
  others: [],
  address: [],
};

const validationSchema = yup.object().shape({
  // hkid: yup.array().min(1).required()
  // .test("fileSize", "The HK ID file is too large", (value) =>((value[0]?.size <= 5000000))),
  // address: yup.array().min(1).required()
  // .test("fileSize", "The Address Proof file is too large", (value) =>((value[0]?.size <= 5000000))),

  // others: yup
  // .mixed()
  // .required("A file is required")
  // .test(
  //   "fileSize",
  //   "File too large",
  //   value => value && value[0]?.size <= 5000000
  // )

  // others: yup.array().of(
  //   yup.object().shape(
  //     {
  //       lastModified: yup.string().nullable(),
  //       lastModifiedDate: yup.string().nullable(),
  //       name: yup.string().nullable(),
  //       path: yup.string().nullable(),
  //       size: yup.string().nullable(),
  //       type: yup.string().nullable(),
  //       webkitRelativePath: yup.string().nullable(),
  //     }
  //   )
  // )

  others: yup
    .array()
    .of(
      yup.object().shape({
        size: yup
          .mixed()
          .test(
            "fileSize",
            "The HK ID file is too large",
            (value) => value[0]?.size <= 5000000
          ),
      })
    )
    .required()
    .min(1),
});

const SupportingDocuments = () => {
  const acceptType = [
    "image/tiff",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            Section 8: Upload Supporting documents
          </Typography>
          <Divider />
          <Typography variant="subtitle2" align="center" gutterBottom={true}>
            Supporting Documents Checklist
          </Typography>
          <Divider />
          <Grid container spacing={1}>
            <Grid className={classes.gridItem} item xs={6}>
              Data Change fields
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              Supporting Documents
            </Grid>
            <Grid item xs={6}>
              Date of Birth
            </Grid>
            <Grid item xs={6}>
              HKID
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              First Name
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              HIKD
            </Grid>
            <Grid item xs={6}>
              Residential Address
            </Grid>
            <Grid item xs={6}>
              Address Proof
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        <Form className={classes.uploadArea}>
          <Typography variant="subtitle2">
            Upload Supporting Documents Area
          </Typography>
          <Form.Dropzone
            label="HK ID / Passport"
            name="hkid"
            accept={acceptType}
            // maxSize={5000000} // bytes
            placeholder="Drag to upload"
            className={classes.dropzone}
            titleClass={classes.titleClass}
          />

          <Form.Dropzone
            label="Address Proof"
            name="address"
            accept={acceptType}
            // maxSize={5000000} // bytes
            placeholder="Drag to upload"
            className={classes.dropzone}
            titleClass={classes.titleClass}
          />

          <Form.Dropzone
            label="Others"
            name="others"
            accept={acceptType}
            // maxSize={5000000} // bytes
            placeholder="Drag to upload"
            className={classes.dropzoneOthers}
            titleClass={classes.titleClass}
            multiple={true}
          />

          <Form.Submit>Upload</Form.Submit>
        </Form>
      </Grid>
    </Formik>
  );
};

export default SupportingDocuments;
