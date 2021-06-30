import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Particles from 'react-particles-js';
import sanityClient from '../client';


const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center'
    },
    title: {
      color: "#fff",
      marginBottom: "1em"
    },
    container: {
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#66999',
      minHeight: '100vh',
      paddingBottom: '4.5em',
      paddingTop: '4.5em',
    },
    particles:{
      zindex:'-999',
      width: '100%',
      height: '100vmax !important',
      position: 'fixed',
     top:0
    },
    titleTech:{
      color:'#16d857'
    },
    image:{
     width:'75px',
     height:'75px'
    },
    gridListTile:{
      width:'75px',
      height:'75px'
    }
}
))

const Tech = () => {
  const [postData, setPost] = useState(null);
  const classes = useStyles();

  
  useEffect(() => {
    sanityClient
        .fetch(`*[_type == "tech"]{
        title,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`)
        .then((data) => setPost(data))
        .catch(console.error);
}, []);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <Container>
        <Typography className ={classes.title} variant="h3">Technologies</Typography>

      <GridList cellHeight={180}  cols={4}>
  
                    {postData && postData.map((tech, index) => (
            
                            <GridListTile key={tech.img} cols={tech.cols || 1} className={classes.gridListTile}>
            <img src={tech.mainImage.asset.url} alt={tech.mainImage.alt} className={classes.image}/>
            <GridListTileBar
             title={<p className={classes.titleTech}>{tech.title}</p>}
            
         
         
              />

  
          </GridListTile>
        ))}
      </GridList>
      </Container >
      <div className={classes.particles}>
             <Particles 
             height="100vh"
             id="tsparticles"
             options={{
               background: {
                 color: {
                   value: "#0d47a1",
                 },
               },
               fpsLimit: 60,
               interactivity: {
                 detectsOn: "canvas",
                 events: {
                   onClick: {
                     enable: true,
                     mode: "push",
                   },
                   onHover: {
                     enable: true,
                     mode: "repulse",
                   },
                   resize: true,
                 },
                 modes: {
                   bubble: {
                     distance: 400,
                     duration: 2,
                     opacity: 0.8,
                     size: 40,
                   },
                   push: {
                     quantity: 4,
                   },
                   repulse: {
                     distance: 200,
                     duration: 0.4,
                   },
                 },
               },
               particles: {
                 color: {
                   value: "#ffffff",
                 },
                 links: {
                   color: "#ffffff",
                   distance: 150,
                   enable: true,
                   opacity: 0.5,
                   width: 1,
                 },
                 collisions: {
                   enable: true,
                 },
                 move: {
                   direction: "none",
                   enable: true,
                   outMode: "bounce",
                   random: false,
                   speed: 6,
                   straight: false,
                 },
                 number: {
                   density: {
                     enable: true,
                     value_area: 800,
                   },
                   value: 80,
                 },
                 opacity: {
                   value: 0.5,
                 },
                 shape: {
                   type: "circle",
                 },
                 size: {
                   random: true,
                   value: 5,
                 },
               },
               detectRetina: true,
             }}
      /> 
      </div>
      </div>
        </div>
    )
}

export default Tech
