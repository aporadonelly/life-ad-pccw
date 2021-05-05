import AppProvider from "@contexts/AppProvider";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import {
  HomeOutlined as HomeOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon,
  BusinessOutlined as BusinessOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  BusinessCenterOutlined as BusinessCenterOutlinedIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  RecordVoiceOverOutlined as RecordVoiceOverOutlinedIcon,
  GavelOutlined as GavelOutlinedIcon,
  PublicOutlined as PublicOutlinedIcon,
} from "@material-ui/icons";
import Header from "./Header";
import Sider from "./Sider";
import Menu from "./Menu";
import Content from "./Content";
import Breadcrumbs from "./Breadcrumbs";
import Settings from "./Settings";

const Page = ({ children, ...props }) => {
  const location = useLocation();
  const { t } = useTranslation(["sider"]);

  return (
    <AppProvider {...props}>
      <Box display="flex" minHeight="100vh">
        <Header />
        <Sider>
          <Menu>
            <Menu.Item
              href="/dashboard"
              name={t("sider:menu.dashboard")}
              icon={<HomeOutlinedIcon />}
            />
            <Menu.Item
              href="/enquires"
              name={t("sider:menu.enquires")}
              icon={<SearchOutlinedIcon />}
            />
            <Menu.Item
              href="/trustee"
              name={t("sider:menu.trustee")}
              icon={<AccountBalanceOutlinedIcon />}
            />
            <Menu.Item
              href="/company"
              name={t("sider:menu.company")}
              icon={<BusinessOutlinedIcon />}
            />
            <Menu.Item
              href="/indivdual"
              name={t("sider:menu.individual")}
              icon={<PersonOutlineOutlinedIcon />}
            />
            <Menu.Item
              href="/employer"
              name={t("sider:menu.employer")}
              icon={<BusinessCenterOutlinedIcon />}
            />
            <Menu.Item
              href="/employee-search"
              name={t("sider:menu.employee")}
              icon={<PeopleOutlineOutlinedIcon />}
            />
            <Menu.Item
              href="/agent"
              name={t("sider:menu.agent")}
              icon={<RecordVoiceOverOutlinedIcon />}
            />
            <Menu.Item
              href="/general-legar"
              name={t("sider:menu.generalLegar")}
              icon={<GavelOutlinedIcon />}
            />
            <Menu.Item
              href="/correspondenses"
              name={t("sider:menu.correspondenses")}
              icon={<PublicOutlinedIcon />}
            />
          </Menu>
        </Sider>
        <Content>
          {(location.pathname === "/employee-search" ||
            location.pathname === "/employee-search-results" ||
            location.pathname === "/employee-view") && (
            <Breadcrumbs routes={["Employee", "Member Enqueries"]} />
          )}
          {children}
        </Content>
      </Box>
      <Settings />
    </AppProvider>
  );
};
export default Page;
