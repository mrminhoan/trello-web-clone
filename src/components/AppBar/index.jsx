import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { ReactComponent as TrelloLogo } from '~/assets/trello.svg';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Templates from './Menus/Templates';
import Starred from './Menus/Starred';
import Profiles from './Menus/Profile';
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SvgIcon
            sx={{ color: 'primary.main' }}
            component={TrelloLogo}
            inheritViewBox
          />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
            variant="span"
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Templates />
        <Starred />

        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
