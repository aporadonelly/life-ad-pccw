import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { Form } from "@components/common";
import * as yup from "yup";
import {
  Grid,
  Divider,
  Typography,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { blobToDataURL } from "blob-util";

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
const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = [
  "application/pdf",
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/tiff",
];

const validationSchema = yup.object().shape({
  hkid: yup
    .mixed()
    .required()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value?.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported File Format", (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    )
    .test("fileExists", "File Exists", (value, context) => {
      const { address, others } = context.parent;

      if (value?.name === address?.name) {
        return false;
      } else if (others.some((v) => v.name === value?.name)) {
        return false;
      } else {
        return true;
      }
    }),
  address: yup
    .mixed()
    .required()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value?.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported File Format", (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    )
    .test("fileExists", "File Exists", (value, context) => {
      const { hkid, others } = context.parent;

      if (value?.name === hkid?.name) {
        return false;
      } else if (others.some((v) => v.name === value?.name)) {
        return false;
      } else {
        return true;
      }
    }),
  others: yup
    .mixed()
    .test("fileSize", function (value) {
      let fileNameError = "";
      const fileSize = value.every((v) => {
        if (v.size <= FILE_SIZE) return v.size <= FILE_SIZE;
        fileNameError = v.name;
        return false;
      });

      if (fileSize) return fileSize;
      return this.createError({
        message: `${fileNameError} is too large`,
      });
    })
    .test("fileType", function (value) {
      let fileNameError = "";
      const fileType = value.every((v) => {
        if (SUPPORTED_FORMATS.includes(v.type))
          return SUPPORTED_FORMATS.includes(v.type);
        fileNameError = v.name;
        return false;
      });

      if (fileType) return fileType;
      return this.createError({
        message: `${fileNameError} is Unsupported File Format`,
      });
    })
    .test("fileExists", "File Exists", (value, context) => {
      const { hkid, address } = context.parent;

      if (value.some((v) => v.name === hkid?.name)) {
        return false;
      } else if (value.some((v) => v.name === address?.name)) {
        return false;
      } else {
        return true;
      }
    }),
});

const SupportingDocuments = (props) => {
  const classes = useStyles();
  const { vldUpldDoc, isLoading } = props;

  const handleSubmit = async (values) => {
    const hkidBase64 = [
      {
        filename: values.hkid.name,
        base64: await blobToDataURL(values.hkid),
      },
    ];
    const addressBase64 = [
      {
        filename: values.address.name,
        base64: await blobToDataURL(values.address),
      },
    ];
    const othersBase64 = await Promise.all(
      values.others.map(async (file) => ({
        filename: file.name,
        base64: await blobToDataURL(file),
      }))
    );
    const documents = [...hkidBase64, ...addressBase64, ...othersBase64];
    vldUpldDoc({
      files: documents,
      validFormat: SUPPORTED_FORMATS.join(","),
      validSizeMb: 5,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
            accept={SUPPORTED_FORMATS}
            placeholder="Drag to upload"
            className={classes.dropzone}
            titleClass={classes.titleClass}
          />

          <Form.Dropzone
            label="Address Proof"
            name="address"
            accept={SUPPORTED_FORMATS}
            placeholder="Drag to upload"
            className={classes.dropzone}
            titleClass={classes.titleClass}
          />

          <Form.Dropzone
            label="Others"
            name="others"
            accept={SUPPORTED_FORMATS}
            placeholder="Drag to upload"
            className={classes.dropzoneOthers}
            titleClass={classes.titleClass}
            multiple={true}
          />

          <Grid container>
            <Grid item xs={5}>
              <Form.Reset variant="outlined" color="secondary">
                Previous Page
              </Form.Reset>
            </Grid>
            <Grid item xs={4}>
              <Form.Reset variant="outlined" color="secondary">
                Next Page
              </Form.Reset>
            </Grid>
            <Grid item xs={3}>
              <Form.Submit>
                {isLoading ? (
                  <Box display="flex" justifyContent="center">
                    <CircularProgress size={25} color="inherit" />
                  </Box>
                ) : (
                  "UPLOAD"
                )}
              </Form.Submit>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Formik>
  );
};

export default SupportingDocuments;
