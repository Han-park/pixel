import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import OverviewAbout from './overviewAbout';
import OverviewGraph from './overviewGraph';
import OverviewTagInfo from './overviewTagInfo';
import ExploreGrid from '../ExploreGrid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{pb: 10}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Overview" {...a11yProps(0)} sx={{textTransform: 'none' ,fontSize: 16}}/>
          <Tab label="Posts" {...a11yProps(1)} sx={{textTransform: 'none',fontSize: 16}}/>
          <Tab label="Bookmarks" {...a11yProps(2)} sx={{textTransform: 'none',fontSize: 16}}/>
          <Tab label="Comments" {...a11yProps(3)} sx={{textTransform: 'none',fontSize: 16}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OverviewAbout />
        <OverviewGraph />
        <OverviewTagInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="h5" component="div" sx={{ml: 1, mt: 3, mb: 0, fontSize: 20}}>
        21 Posts
      </Typography> 
      <ExploreGrid ml={0} md={4} sm={6} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant="h5" component="div" sx={{ml: 1, mt: 3, mb: 0, fontSize: 20}}>
        21 Bookmarks
      </Typography> 
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography variant="h5" component="div" sx={{ml: 1, mt: 3, mb: 0, fontSize: 20}}>
        21 Comments
      </Typography> 
      </TabPanel>
    </Box>
  );
}