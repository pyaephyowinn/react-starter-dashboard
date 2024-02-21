import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Sidebar from '@/components/Sidebar/Sidebar';
import { drawerWidth } from '@/config/const';
import { useIsMobile } from '@/hooks/useIsMobile';

const RootLayout = () => {
  const isMobile = useIsMobile();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          paddingLeft: `${isMobile ? 0 : drawerWidth}px`,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            minHeight: 64,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isMobile && (
            <IconButton onClick={() => setOpened((o) => !o)}>
              <SvgIcon>
                <Menu />
              </SvgIcon>
            </IconButton>
          )}

          <Typography variant="h5" component="h1">
            Dashboard
          </Typography>
        </Container>
      </AppBar>

      <Sidebar
        isMobile={isMobile}
        opened={opened}
        toggleOpened={() => setOpened((o) => !o)}
      />

      <Box
        sx={{
          paddingLeft: isMobile ? 0 : `${drawerWidth}px`,
          minHeight: '100vh',
          paddingTop: '64px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
export default RootLayout;
