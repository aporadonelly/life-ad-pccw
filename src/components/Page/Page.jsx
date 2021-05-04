import AppProvider from "@contexts/AppProvider";
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

const Page = ({ children, ...props }) => (
  <AppProvider {...props}>
    <Box display="flex" minHeight="100vh">
      <Header />
      <Sider>
        <Menu>
          <Menu.Item
            href="/dashboard"
            name="Dashboard"
            icon={<HomeOutlinedIcon />}
          />
          <Menu.Item
            href="/enquires"
            name="Enquires"
            icon={<SearchOutlinedIcon />}
          />
          <Menu.Item
            href="/trustee"
            name="Trustee"
            icon={<AccountBalanceOutlinedIcon />}
          />
          <Menu.Item
            href="/company"
            name="Trustee"
            icon={<BusinessOutlinedIcon />}
          />
          <Menu.Item
            href="/indivdual"
            name="Indivdual"
            icon={<PersonOutlineOutlinedIcon />}
          />
          <Menu.Item
            href="/employer"
            name="Employer"
            icon={<BusinessCenterOutlinedIcon />}
          />
          <Menu.Item
            href="/employee-search"
            name="Employee"
            icon={<PeopleOutlineOutlinedIcon />}
          />
          <Menu.Item
            href="/agent"
            name="Agent"
            icon={<RecordVoiceOverOutlinedIcon />}
          />
          <Menu.Item
            href="/general-legar"
            name="General Legar"
            icon={<GavelOutlinedIcon />}
          />
          <Menu.Item
            href="/correspondenses"
            name="Correspondenses"
            icon={<PublicOutlinedIcon />}
          />
        </Menu>
      </Sider>
      <Content>{children}</Content>
    </Box>
  </AppProvider>
);

export default Page;
