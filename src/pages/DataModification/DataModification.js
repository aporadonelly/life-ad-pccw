import { Page } from "@containers";
import { PageInner } from "@components/layout";
import { makeStyles } from "@material-ui/core/styles";
import SupportingDocuments from "./SupportingDocuments";
import { Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
  },
  rootTab: {
    background: theme.palette.divider,
  },
}));

const DataModification = (props) => {
  const [index, setValue] = useState(0);
  const classes = useStyles();

  const onChange = (value, newValue) => {
    // console.log('newValue :' + newValue);
    setValue(newValue);
  };

  const a11yProps = (index) => {
    console.log(index);
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  return (
    <Page>
      <PageInner>
        <div className={classes.root}>
          <Grid xs={2}>
            <Tabs
              indicatorColor="none"
              orientation="vertical"
              variant="scrollable"
              value={index}
              onChange={onChange}
              aria-label="Section Tab"
            >
              <Tab
                label={TitleTabs("1:", "Personal Details")}
                {...a11yProps(0)}
              />
              <Tab
                className={{root: classes.rootTab}}
                label={TitleTabs("2:", "Contact Information")}
                {...a11yProps(1)}
              />
              <Tab
                label={TitleTabs("3:", "Communication Preferences")}
                {...a11yProps(2)}
              />
              <Tab
                className={{root: classes.rootTab}}
                label={TitleTabs("4:", "MPF Accounts Information")}
                {...a11yProps(3)}
              />
              <Tab
                label={TitleTabs("5:", "Payment Method")}
                {...a11yProps(4)}
              />
              <Tab
                className={{root: classes.rootTab}}
                label={TitleTabs("6:", "CRS Information")}
                {...a11yProps(5)}
              />
              <Tab
                label={TitleTabs("7:", "Others Details")}
                {...a11yProps(6)}
              />
              <Tab
                className={{root: classes.rootTab}}
                label={TitleTabs("8:", "Upload Supporting Documents")}
                {...a11yProps(7)}
              />
              <Tab label={TitleTabs("9:", "Confirmation")} {...a11yProps(8)} />
            </Tabs>
          </Grid>
          
          {/* SECTION - 8 */}
          <SupportingDocuments index={index} />
        </div>
      </PageInner>
    </Page>
  );
};

const TitleTabs = (section, title) => (
  <Box
    alignItems="center"
    flexDirection="column"
    mt={0.5}
    justifyContent="center"
    display="flex"
    height={60}
  >
    <Typography variant="caption" display="block" gutterBottom>
      SECTION {section}
    </Typography>
    <Typography variant="button" display="block">
      {title}
    </Typography>
  </Box>
);
export default DataModification;
