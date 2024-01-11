import React from 'react';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Avatar from '@mui/material/Avatar';


const Item = ({ icon, title, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100], padding: "5px 35px 5px 20px !important"}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        
      }}
    >
    <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"z
              >
              <Avatar sx={{ width: 100, height: 100 }}/>
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="Bold"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  fontWeight="400"
                >
                  President
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                icon={<HomeOutlinedIcon />}
                title="Dashboard"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Data
              </Typography>
              <Item
                icon={<PeopleOutlinedIcon />}
                title="Manage Team"
                to="/team"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<ContactsOutlinedIcon />}
                title="Contacts"
                to="/contacts"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<ReceiptOutlinedIcon />}
                title="Invoices"
                to="/invoices"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Pages
              </Typography>
              <Item
                icon={<PersonOutlinedIcon />}
                title="Profile Form"
                to="/form"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<CalendarTodayOutlinedIcon />}
                title="Calendar"
                to="/calendar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<HelpOutlinedIcon />}
                title="Help"
                to="/faq"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Charts
              </Typography>
              <Item
                icon={<PieChartOutlinedIcon />}
                title="Pie"
                to="/pie"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<BarChartOutlinedIcon />}
                title="Bar"
                to="/bar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                icon={<TimelineOutlinedIcon />}
                title="Line"
                to="/line"
                selected={selected}
                setSelected={setSelected}
              />    
              <Item
                icon={<MapOutlinedIcon />}
                title="Geography"
                to="/geography"
                selected={selected}
                setSelected={setSelected}
              />
          </Box>
        </Menu>
      </ProSidebar>
      </div>
    </Box>
  );
};
        
export default SideBar