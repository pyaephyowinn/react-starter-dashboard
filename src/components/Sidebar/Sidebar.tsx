import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ReactNode } from 'react';
import { drawerWidth } from '@/config/const';
import { Speed } from '@mui/icons-material';

interface SidebarProps {
  isMobile: boolean;
  opened: boolean;
  toggleOpened: () => void;
}

interface SidebarWrapper extends SidebarProps {
  children: ReactNode;
}

const SidebarWrapper = ({
  isMobile,
  opened,
  toggleOpened,
  children,
}: SidebarWrapper) => {
  return (
    <Drawer
      open={opened}
      onClose={toggleOpened}
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  );
};

const Sidebar = ({ isMobile, opened, toggleOpened }: SidebarProps) => {
  return (
    <SidebarWrapper
      isMobile={isMobile}
      opened={opened}
      toggleOpened={toggleOpened}
    >
      <h1>Sidebar</h1>
    </SidebarWrapper>
  );
};
export default Sidebar;
