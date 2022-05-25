import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import SendIcon from '@mui/icons-material/Send';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';

import {  GridView as GridViewIcon, 
          NotificationsNone  as NotificationsNoneIcon, 
          BarChart as BarChartIcon, 
          PersonOutline as PersonOutlineIcon,
          Settings as SettingsIcon,
          ExpandLess as ExpandLessIcon,
          ExpandMore as ExpandMoreIcon,
          Send as SendIcon,
        } from '@mui/icons-material';

import '../../../../assets/css/SideBar.css'

const drawerWidth = 240;

const data = [
  { icon: <GridViewIcon />, label: 'Tasks', noti: 4 },
  { icon: <NotificationsNoneIcon />, label: 'Notifications', noti: 7 },
  { icon: <BarChartIcon />, label: 'Analytics' },
  { icon: <PersonOutlineIcon />, label: 'Team', noti: 2 },
];

export default function SideBar() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = React.useState(true);
  
  const handleListItemClick = (event, index) => {
    console.log(index)
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="sidebar">
      <Drawer
          className='sidebar__wrap'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar className='sidebar__toolbar' style={{ padding: 0 }}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton className='sidebar__name__expand' onClick={handleClick}>
                <Box style={{ display: 'flex' }}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Company" class='sidebar__name__company'/>
                </Box>
                {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              <Collapse className='sidebar__collapse__nav' in={open} timeout="auto" unmountOnExit>
                <List>
                  {data.map((item, index) => (
                    <Link to={`/${item.label}`}>
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          selected={selectedIndex === index}
                          onClick={(event) => handleListItemClick(event, index)}
                        >
                          <ListItemIcon>
                            {item.icon}
                          </ListItemIcon>
                            {/* {index % 2 === 0 ? <GridViewIcon /> : <NotificationsNoneIcon />} */}
                          <ListItemText primary={item.label} />
                          {item.noti ?   
                          <p className='sidebar__noti'>
                            {item.noti}
                          </p>
                          : ''}
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </List>
          </Toolbar>
          {/* <Divider /> */}
          <List
            className='sidebar__setting'
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
              <ListItemButton className='sidebar__setting__list__item'>
                <Box style={{ display: 'flex' }}>
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Setting" class='sidebar__setting__text'/>
                </Box>
              </ListItemButton>
          </List>
      </Drawer>
    </div>
  );
}
