import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip'




const useStyles = makeStyles((theme)=>({
  root: {
    textAlign:'center',
  },
  container:{
    backgroundImage: `url('images/background01.jpg')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#66999',
    minHeight:'100vh',
    paddingBottom:'4.5em',
    paddingTop:'4.5em'
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
    marginBottom: '4em'
    
  },
  textWriter:{
   fontColor:'#ffffff',
  },
  image:{
    borderRadius:"100px",
    maxWidth:"10em",
   marginBottom:'4em',
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   marginTop:'4.5em'
  },
  stack: {
   textAlign:'center',

  },
  flip:{
    
  },
   imagenPrueba:{
    borderRadius:"100px",
    maxWidth:"20%",
    maxHeight:"20em",
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)',
   margin:'0.2em'
   },

}));

const Home = () => {


const classes=useStyles();
const imagePerfil='images/perfil.jpg'
const imagenMongo='images/mongodb.png'
const imagenNode='images/node.png'
const imagenReact= 'images/react.png'
const imagenExpress='images/express.png'

  
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
             <img className={classes.imagenPrueba} src={imagenMongo} alt="imagen de prueba" />
             <img className={classes.imagenPrueba} src={imagenExpress} alt="imagen de prueba" />
             <img className={classes.imagenPrueba} src={imagenReact} alt="imagen de prueba" />
             <img className={classes.imagenPrueba} src={imagenNode} alt="imagen de prueba" />

           </Flip>
           </div>
           </div>
        </div>
    )
}

export default Home
