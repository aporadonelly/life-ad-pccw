// import { isObject, reduce } from "lodash";
// import clsx from "clsx";
// import { useStyles } from "./styles";
// import { Grid, Typography } from "@material-ui/core";

// const SubjectInfo = (props) => {
//   const { data } = props;
//   const classes = useStyles();

//   return (
//     <Grid className={classes.root} container>
//       {data.map((arr, index) => (
//         <Grid key={index} className={classes.divider} item xs="auto">
//           <Grid container>
//             {arr.map((info) => {
//               if (isObject(info, index))
//                 return reduce(
//                   info,
//                   (result, value, key) => [
//                     ...result,
//                     <Grid
//                       key={index}
//                       item
//                       className={clsx(classes.divider, classes.spacing)}
//                     >
//                       <Typography
//                         className={classes.fontWeightLight}
//                         variant="body2"
//                         color="inherit"
//                       >
//                         {key} {value}
//                       </Typography>
//                     </Grid>,
//                   ],
//                   []
//                 );
//               return (
//                 <Grid key={index} item xs={12}>
//                   <Typography
//                     className={classes.fontWeightMedium}
//                     variant="body1"
//                     color="inherit"
//                   >
//                     {info}
//                   </Typography>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// SubjectInfo.defaultProps = {
//   data: [],
// };

// export default SubjectInfo;
import { reduce } from "lodash";
import clsx from "clsx";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const SubjectInfo = (props) => {
  const { subject, info } = props;
  const classes = useStyles();

  return (
    <Box
      className={classes.divider}
      display="flex"
      flexDirection="column"
      fontWeight="fontWeightMedium"
    >
      <Typography
        className={classes.typography}
        variant="body1"
        color="inherit"
      >
        {subject}
      </Typography>
      <Box display="flex" flexWrap="wrap" fontWeight="fontWeightLight">
        {reduce(
          info,
          (result, value, key) => [
            ...result,
            <Typography
              className={clsx(
                classes.typography,
                classes.divider,
                classes.spacing
              )}
              variant="body2"
              color="inherit"
            >
              {key} {value}
            </Typography>,
          ],
          []
        )}
      </Box>
    </Box>
  );
};

export default SubjectInfo;
