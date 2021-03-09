import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';



const useStyles = makeStyles({
  root: {
    position:'fixed',
    bottom:'0.5em',
    width: "90%",
    marginLeft:"5%",
    marginRight:"5%",
    height:'4em',
    borderRadius:'25px',
    textAlign:'center',
    backgroundColor: '#000000',
    borderColor:"#FFF",
    opacity:'0.9',
  },
  navLink:{
    margin:' 0.5em',
  },
  button:{
    borderRadius:'100px',
    color:'#FFF',
    borderColor:"#FFF",
    backgroundColor:'#070707',
    boxShadow:'5px 5px 4px -2px #000000'
  }
});

const Footer = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <a className={classes.navLink} href={'https://www.linkedin.com/in/cristian-bejarano-464299149/'}><Button className={classes.button} variant="outlined"><LinkedInIcon /></Button></a>
        <a className={classes.navLink}href={'https://github.com/kyruodioso'}><Button className={classes.button} variant="outlined"><GitHubIcon /></Button></a>
        <a className={classes.navLink}href={'https://api.whatsapp.com/send?phone=+54 1169422060'}><Button className={classes.button} variant="outlined"><WhatsAppIcon /></Button></a>
        <a className={classes.navLink}href={'mailto:cristianbejaranodev@gmail.com'}><Button className={classes.button} variant="outlined"><EmailIcon /></Button></a>          
      </BottomNavigation>
    );
}

export default Footer
