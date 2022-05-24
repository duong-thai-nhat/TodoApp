import React from 'react'
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import SectionContent from '../Content/Content';

function ContainerPage() {
  return (
    <Box sx={{ display: 'flex' }}>
        <SideBar/>
        <SectionContent/>
    </Box>
  )
}

export default ContainerPage