import { useDropzone } from "react-dropzone";
import { withField } from "@hocs";
import {
  Box,
  IconButton,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import { Cancel as CancelIcon } from "@material-ui/icons";
import { FileIcon } from "react-file-icon";
import { concat, map, head, isEmpty, compact, uniqBy } from "lodash";
import clsx from "clsx";

const Dropzone = (props) => {
  const {
    className,
    label,
    name,
    value,
    helpers,
    zoneActiveText,
    placeholder,
    titleClass,
    multiple,
    error,
    helperText,
    ...rest
  } = props;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop: handleDrop,
    multiple,
    ...rest,
  });

  function handleDrop(acceptedFiles, fileRejections) {
    const files = multiple
      ? uniqBy(concat(value, acceptedFiles,map(fileRejections, "file")), 'name',)
      : acceptedFiles.length > 0
      ? head(acceptedFiles)
      : head(fileRejections)?.file;

    helpers.setValue(files);
  }

  const handleRemove = (index) => (e) => {
    e.stopPropagation();

    if (multiple) {
      value.splice(index, 1);
      helpers.setValue(value);
    } else {
      helpers.setValue("");
    }
  };

  // console.log("DROPZONE VALUE: ", value);

  return (
    <FormControl error={error}>
      <FormLabel>{label}</FormLabel>
      <div
        {...getRootProps()}
        className={clsx("dropzone", className, {
          "dropzone--active": isDragActive,
        })}
      >
        <input {...getInputProps()} name={name} />
        {(acceptedFiles.length && !isEmpty(value)) || fileRejections.length ? (
          compact(concat([], value)).map((file, index) => {
            if (file.type.includes("image")) {
              return (
                <img
                  key={file.name}
                  src={URL.createObjectURL(file)}
                  className="img-thumbnail"
                  alt={file.name}
                />
              );
            }

            return (
              <Box
                key={file.name}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box width={50} position="relative">
                  <IconButton
                    size="small"
                    onClick={handleRemove(index)}
                    style={{ position: "absolute", top: -10, left: -10 }}
                  >
                    <CancelIcon color="error" />
                  </IconButton>
                  <FileIcon extension={file.name.split(".").pop()} width={45} />
                </Box>
                <Typography className={titleClass} variant="subtitle2">
                  {file.name.split(".").shift()}
                </Typography>
              </Box>
            );
          })
        ) : isDragActive ? (
          <p className="text">{zoneActiveText}</p>
        ) : (
          <p className="text">{placeholder}</p>
        )}
      </div>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

Dropzone.defaultProps = {
  zoneActiveText: "Drop file(s) here",
  placeholder:
    "Try dropping some files here, or click to select files to upload.",
  multiple: false,
};

export default withField(Dropzone);
