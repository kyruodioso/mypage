import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import {NavLink} from 'react-router-dom'

const drawerWidth = '50%';

const useStyles = makeStyles((theme) => ({
  root: {
    top:'0',
    marginBottom:'-4.5em',
    display: 'flex',
    width: '100%',
    height:'4.5em',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      zIndex: theme.zIndex.drawer + 1,
    }),
    backgroundColor:'rgba(7, 7, 7, 0.672)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'inherit'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#070707',
    color:'white',
    opacity:'0.9'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  button:{
    marginRight: theme.spacing(1),
    color:'#FFF',
    borderColor:"#FFF",
    borderRadius:"20px"
  },
  menuButton: {
    marginRight: theme.spacing(0),
    position:'absolute'
  },
  navLink:{
    textDecoration:'inherit',
    color: 'inherit'
  },


}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isMobile =useMediaQuery(theme.breakpoints.down('xs'))

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
            <CssBaseline />
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <NavLink className={classes.title} to="/">
          <Typography variant="h4" noWrap className={classes.title}>
            Dev
          </Typography>
          </NavLink>
          <div>
              {isMobile ?   (
                        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
 
 
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}color="inherit">
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
              <NavLink className={classes.navLink} onClick={handleDrawerClose} to="/">Dev Home</NavLink>
              </ListItem>
          <Divider />
              <ListItem>
              <NavLink className={classes.navLink} onClick={handleDrawerClose} to="/post">Post</NavLink>
              </ListItem>
              <Divider />
                <ListItem>
                <NavLink className={classes.navLink} onClick={handleDrawerClose} to="/projects">Projects</NavLink>
                  </ListItem>
                  <Divider />
                <ListItem >
                <NavLink className={classes.navLink} onClick={handleDrawerClose} to="/about">About Me!</NavLink>
                  </ListItem>
                  <Divider />
                <ListItem active>
                <NavLink className={classes.navLink} onClick={handleDrawerClose} to="/tech">Technologies</NavLink>
                  </ListItem>     
         
        </List>
        <Divider />

      </Drawer>
      </>
              ):(
                <div className={classes.buttonGroup}>
                
                <NavLink className={classes.navLink} to="/post"><Button variant="outlined"  className={classes.button}>Post </Button></NavLink>
               
                
                <NavLink className={classes.navLink} to="/projects"><Button variant="outlined" className={classes.button}>Projects</Button></NavLink>
                <NavLink className={classes.navLink} to="/about" exact><Button variant="outlined"   className={classes.button}>About Me!</Button></NavLink>          
                <NavLink className={classes.navLink} to="/tech"><Button variant="outlined"  className={classes.button}>Technologies</Button></NavLink>
                
                </div>
              )}
              </div>
              </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar