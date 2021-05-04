import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@material-ui/core";

const Breadcrumbs = ({ routes }) => {
  return (
    <MuiBreadcrumbs>
      {routes.map((route) => (
        <Typography variant="body2" color="inherit">
          {route}
        </Typography>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
