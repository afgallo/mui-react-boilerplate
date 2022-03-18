import { AppBar, Box, Toolbar, Typography, IconButton, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            <Link to="/" component={RouterLink} color="secondary">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            <Link to="/page01" component={RouterLink} color="secondary">
              Page 01
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/page02" component={RouterLink} color="secondary">
              Page 02
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
