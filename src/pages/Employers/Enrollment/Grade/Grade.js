import { useEffect, useMemo } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { DataTable } from "@components/common";

const Grade = (props) => {
  const { ldGradeInfo, gradeInfo } = props;

  console.log(gradeInfo);

  const columns = useMemo(
    () => [
      {
        Header: "Contribution Type",
        Cell: ({ row }) => {
          return (
            <FormControlLabel
              control={<Checkbox />}
              size="small"
              label="Default Grade"
            />
          );
        },
      },
      {
        Header: "Action",
        headerProps: {
          style: { textAlign: "center" },
        },
      },
    ],
    []
  );

  useEffect(() => {
    ldGradeInfo({
      payrollGrpUuid: "b38caabd-80b3-48a8-922c-bca6e6784d92",
      erGradeUuid: "e44faf85-35d0-459e-bc23-5178fa7b37d5",
    });
  }, [ldGradeInfo]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Grade
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={4}>
                    <TextField
                      id="select"
                      label="Grade Name"
                      variant="outlined"
                      size="small"
                      select
                    >
                      <MenuItem value="10">Ten</MenuItem>
                      <MenuItem value="20">Twenty</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <FormControlLabel
                      control={<Checkbox />}
                      size="small"
                      label="Default Grade"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <DataTable
                  title="Contribution Type"
                  data={gradeInfo?.erContributionTyps}
                  columns={columns}
                  disableQuickSearch
                  disablePagination
                  disableShowEntries
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Grade
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Grade;
