import { useState } from "react";
import { Page } from "@containers";
import { PageInner } from "@components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Tab, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import SupportingDocuments from "./SupportingDocuments";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    backgroundColor: theme.palette.divider,
  },
}));

const DataModification = (props) => {
  const [activeTab, setActiveTab] = useState("Section 8");
  const classes = useStyles();

  const handleChange = (value, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Page>
      <PageInner>
        <TabContext value={activeTab}>
          <Grid container>
            <Grid item xs={2}>
              <TabList
                indicatorColor="none"
                orientation="vertical"
                variant="scrollable"
                onChange={handleChange}
                aria-label="Section Tab"
              >
                <Tab
                  className={classes.tabs}
                  label={TitleTabs("1:", "Personal Details")}
                  value="Section 1"
                />
                <Tab label={TitleTabs("2:", "Contact Information")} value="Section 2" />
                <Tab
                  className={classes.tabs}
                  label={TitleTabs("3:", "Communication Preferences")}
                  value="Section 3"
                />
                <Tab label={TitleTabs("4:", "MPF Accounts Information")} value="Section 4"/>
                <Tab
                  className={classes.tabs}
                  label={TitleTabs("5:", "Payment Method")}
                  value="Section 5"
                />
                <Tab label={TitleTabs("6:", "CRS Information")} value="Section 6" />
                <Tab
                  className={classes.tabs}
                  label={TitleTabs("7:", "Others Details")}
                  value="Section 7"
                />
                <Tab
                  label={TitleTabs("8:", "Upload Supporting Documents")}
                  value="Section 8"
                />
                <Tab
                  className={classes.tabs}
                  label={TitleTabs("9:", "Confirmation")}
                  value="Section 9"
                />
              </TabList>
            </Grid>
            <Grid item xs={10}>
              <Box ml={2} mr={2}>
                <TabPanel value="Section 8">
                  <SupportingDocuments />
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </TabContext>
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
