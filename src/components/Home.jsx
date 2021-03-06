import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip'




const useStyles = makeStyles((theme)=>({
  root: {
    textAlign:'center',
  },
  container:{
    backgroundImage: `url('images/dark-background.png')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no repeat',
    backgroundSize: 'cover',
    backgroundColor: '#66999',
    minHeight:'100vh',
    paddingBottom:'4.5em',
    paddingTop:'4em'
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
    marginBottom: '2em'
    
  },
  textWriter:{
   fontColor:'#ffffff',
  },
  image:{
    borderRadius:"100px",
    maxWidth:"10em",
   marginBottom:'3em',
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   marginTop:'1em'
  },
  stack: {
   textAlign:'center',
  },
   imagenMern:{
    borderRadius:"100px",
    maxWidth:"100%",
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   margin:'0.2em'
   },

}));

const Home = () => {


const classes=useStyles();
const imagePerfil='images/perfil.png'

const imagenDeveloper='images/developer.png'

  
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
           <div className="stack">
           <Flip left cascade duration={3500} className={classes.flip}>
             <img className={classes.imagenMern} src={imagenDeveloper} alt="imagen de prueba" />
   

           </Flip>
           </div>
           </div>
        </div>
    )
}

export default Home
