import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';


import BackgroundImage from '../img/bruno-thethe.jpg'


const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height:'110vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    textAlign:'center',
    paddingTop:'7em',
  },
  paper: {
    marginTop:'1em',
    maxWidth: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.796)',
    color:'#ffffff',
    
  },
  container:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
  },
  textWriter:{
   fontSize:'3em',
   fontColor:'#ffffff',
  },
  image:{
    borderRadius:"100px",
    maxWidth:"150px",
   marginBottom:'2em',
   boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)'
  }


}));

const Home = () => {


const classes=useStyles();
const imagePerfil='images/perfil.jpg'


    return (
        <div className={classes.root} >
                     <img className={classes.image} src={imagePerfil} alt="imagen de perfil" />

           <main className={classes.container}>

               <section>
<Zoom bottom duration={3000}>               
                        <div className={classes.textWriter}>
                        <Paper className={classes.paper} >
               <Typewriter
  options={{
    strings: ['Im design...', 'Im developer...', 'Im musician...','Im cartoonist' ,'I 💗 this moment'],
    autoStart: true,
    loop: true,
  }}
/>
</Paper>
</div>
</Zoom>
               </section>
           </main>

        </div>
    )
}

export default Home
