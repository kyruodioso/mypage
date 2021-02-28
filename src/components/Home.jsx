import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';




const useStyles = makeStyles((theme)=>({
  root: {
    textAlign:'center',
  },
  container:{
    backgroundImage: `url('images/rafael-guajardo.jpg')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#66999',
    minHeight:'100vh',
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.796)',
    color:'#ffffff',
    fontSize:'3em',
    
  },
  fade:{
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    display:'flex',
    
  },
  textWriter:{
   fontColor:'#ffffff',
  },
  image:{
    borderRadius:"100px",
    maxWidth:"10em",
   marginBottom:'2em',
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   marginTop:'4.5em'
  },
  imagenPrueba:{
    borderRadius:"100px",
    maxWidth:"10em",
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   marginTop:'4.5em',
  marginBottom:'4em'
  }


}));

const Home = () => {


const classes=useStyles();
const imagePerfil='images/perfil.jpg'
const imagenPrueba='images/prueba.jpg'

  
    return (
        <div className={classes.root} >
          <div className={classes.container}>
                     <img className={classes.image} src={imagePerfil} alt="imagen de perfil" />

           <main className={classes.fade}>

<Fade left cascade duration={3000}>               
                        <Paper className={classes.paper} >
               <Typewriter className={classes.textWriter}
  options={{
    strings: ['Im design...', 'Im developer...', 'Im musician...','Im cartoonist'],
    autoStart: true,
    loop: true,
  }}
/>
</Paper>
</Fade>
           </main>
           <img className={classes.imagenPrueba} src={imagenPrueba} alt="imagen de prueba" />

           </div>
        </div>
    )
}

export default Home
