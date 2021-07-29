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
    // height: 224,
  },
  rootTab: {
    background: theme.palette.divider,
  },
}));

const DataModification = (props) => {
  const [activeTab, setActiveTab] = useState("Section 8");
  const classes = useStyles();

  const handleChange = (value, newValue) => {
    setActiveTab(newValue);
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
                <Tab label={TitleTabs("1:", "Personal Details")} />
                <Tab
                  className={{ root: classes.rootTab }}
                  label={TitleTabs("2:", "Contact Information")}
                />
                <Tab
                  label={TitleTabs("3:", "Communication Preferences")}
                  {...a11yProps(2)}
                />
                <Tab
                  className={{ root: classes.rootTab }}
                  label={TitleTabs("4:", "MPF Accounts Information")}
                />
                <Tab label={TitleTabs("5:", "Payment Method")} />
                <Tab
                  className={{ root: classes.rootTab }}
                  label={TitleTabs("6:", "CRS Information")}
                />
                <Tab label={TitleTabs("7:", "Others Details")} />
                <Tab
                  className={{ root: classes.rootTab }}
                  label={TitleTabs("8:", "Upload Supporting Documents")}
                  value="Section 8"
                />
                <Tab
                  label={TitleTabs("9:", "Confirmation")}
                  {...a11yProps(8)}
                />
              </TabList>
            </Grid>
            <Grid item xs={10}>
              <TabPanel value="Section 8">
                <SupportingDocuments />
              </TabPanel>
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
