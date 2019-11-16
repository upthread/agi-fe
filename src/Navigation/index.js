import React from 'react';
import { Link } from "react-router-dom";
// import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar:{
        backgroundColor:"#028090",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration:"none"
    },
  }));


const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to= "/home" color="inherit" >AGI</Link>
            </Typography>
            
            <Link to= '/'>Home</Link>
              <Link to= '/templ'>Form</Link>
               <Link to= '/multi'>Multi</Link>
          </Toolbar>
        </AppBar>
      </div>
        // <div className='nav_container'>
        //     <header>
        //         <h3 className= "logo"><Link to= "/home">RMT</Link></h3>
        //         <a className="to_nav" href='#primary_nav'>Menu</a>
        //     </header>
        //     <nav id= 'primary_nav'>
        //         <Link to= '/'>Home</Link>
        //         <Link to= '/templ'>Form</Link>
        //         <Link to= '/multi'>Multi</Link>
        //         {/* <Link to= '/'></Link> */}
        //         {/* <Link to= '/'></Link> */}
        //         {/* <Link to= '/'></Link> */}
        //     </nav>
        // </div>
    )
}

export default Navigation