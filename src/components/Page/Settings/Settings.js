import { useAppState } from "@contexts/AppProvider";
import { Box } from "@material-ui/core";
import BaseDrawer from "@components/common/BaseDrawer";
import LanguageSwitcher from "./LanguageSwitcher";

const Settings = () => {
  const { settingsOpen, settingsToggled } = useAppState();

  return (
    <BaseDrawer
      open={settingsOpen}
      onClose={settingsToggled}
      anchor="right"
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box p={2}>
        <LanguageSwitcher />
      </Box>
    </BaseDrawer>
  );
};

export default Settings;
