import { useEffect, useMemo } from "react";
import { useStyles } from "./styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { DataTable } from "@components/common";
import { Definition } from "@components/misc";
import VestingList from "./VestingList";

const Grade = (props) => {
  const { ldGradeInfo, gradeInfo } = props;
  const classes = useStyles();

  const columns = useMemo(
    () => [
      {
        Header: "Contribution Type",
        Cell: ({ row }) => (
          <FormControlLabel
            control={<Checkbox />}
            size="small"
            label={row.original.contriType}
          />
        ),
      },
      {
        Header: "Action",
        headerProps: {
          style: { textAlign: "center" },
        },
        Cell: ({ row }) => <Button color="primary">Detail</Button>,
        cellProps: {
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
                  // data={gradeInfo?.erContributionTyps}
                  columns={columns}
                  data={[
                    {
                      contriType: "Regular Employer Contribution 1 (ERVC1)",
                    },

                    {
                      contriType: "Regular Employer Contribution 1 (ERVC1)",
                    },
                    {
                      contriType: "Regular Employer Contribution 1 (ERVC1)",
                    },
                    {
                      contriType: "Regular Employer Contribution 1 (ERVC1)",
                    },
                  ]}
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
                <Typography variant="h6" color="primary" align="center">
                  Regular Employer Voluntary Contribution 2 (ERVC2)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={6}>
                  <Definition.List>
                    <Definition.Item
                      dt="Contribution Definition"
                      dd="Fixed % of Income"
                    />
                    <Definition.Item dt="Fixed %" dd="5%" />
                    <Definition.Item
                      dt='Definition of "Income"'
                      dd="Relevant Income as defined under MPF Registration"
                    />
                  </Definition.List>
                </Definition>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes.typograhpy}
                  variant="body1"
                  color="primary"
                >
                  Benefit Entitlement
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    size="small"
                    label="The employee attaining the non-statutory normal retirement age of 60"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    size="small"
                    label="The employee attaining the non-statutory early retirement age of 50"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    size="small"
                    label="The death of the employees during the employment with his employer"
                  />
                  <FormControlLabel
                    className={classes.label}
                    control={<Checkbox className={classes.checkbox} />}
                    size="small"
                    label={
                      <>
                        The employee leaving service of the employer due to
                        total incapacity actual retirement of the employee
                        provided that:
                        <ol className={classes.roman}>
                          <li>
                            the employee continues to the employed by the
                            employer after the non-statutory
                          </li>
                        </ol>
                      </>
                    }
                  />
                  <FormControlLabel
                    className={classes.label}
                    control={<Checkbox className={classes.checkbox} />}
                    size="small"
                    label={
                      <>
                        Noramal retirement age:
                        <ol className={classes.roman}>
                          <li>
                            the employer continues to make voluntary
                            contribution on behalf of the employee: and
                          </li>
                          <li>
                            such employee has not withdrawn any of his voluntary
                            contribution prior to his actual retirement
                          </li>
                        </ol>
                      </>
                    }
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <VestingList />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Grade;
