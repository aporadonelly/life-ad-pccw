import { useDropzone } from "react-dropzone";
import { withField } from "@hocs";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import { FileIcon } from "react-file-icon";
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

  function handleDrop(acceptedFiles) {
    const files = multiple ? value.concat(acceptedFiles) : acceptedFiles;

    helpers.setValue(files);
  }

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
        {(acceptedFiles.length && value.length) || fileRejections.length ? (
          value.map((file) => {
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
                <Box width={40}>
                  <FileIcon extension={file.name.split(".").pop()} width={35} />
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
