import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { tokens } from '../../theme';

const SidebarTest = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          background: `${colors.primary[400]}`,
          //   height:'100vh'
        },
        '& .ps-sidebar-root': {
          border: 'none',
        },
        '& .ps-menu-button:hover': {
          color: `#868dfb!important`,
        },
        '& .ps-menu-button:active': {
          color: `#8670fa!important`,
        },
      }}
    >
      <Sidebar>
        {!collapsed && (
          <Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                alt="profile-user"
                width="100px"
                height="100px"
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.gray[100]}
                fontWeight="bold"
                sx={{ m: '10px 0 0 0' }}
              >
                Ed Roh
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </Box>
  );
};

export default SidebarTest;
