import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Background from '../img/rafael-guajardo.jpg'


import sanityClient from '../client';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${Background})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      textAlign:'center',
      paddingTop:'5em'
    },
    title:{
      color:"#fff"
    },
    container:{
      paddingTop:'3em',
    },
    gridListTile: {
      boxShadow:'5px 5px 15px 0px rgba(0,0,0,0.55)'
    },
    subheader:{
      backgroundColor:'rgba(0,0,0,0.55)',
      display:'flex',
      alignItems: 'center',
      justifyContent:'center'
    },
    listSubheader:{
      marginTop: 10
    },
    Typographyh6:{
      color:'white',
    },
    icon:{
      color:'white'
    },
    image:{
        opacity:'0.7'
    },
    link:{
        textDecoration: 'inherit',
        color:'#1eaa1e'
    }

  }));

const Post = () => {
    const [postData, setPost] = useState(null);
    const classes = useStyles();
 
    

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "proyectos"]{
            title,
            date,
            link,
            description,
            projectType,
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
        <Typography className ={classes.title} variant="h3">My Projects!</Typography>
        <Container className={classes.container}>
      <GridList cellHeight={180}  cols={3}>
  
                    {postData && postData.map((proyecto, index) => (
            
                            <GridListTile key={proyecto.img} cols={proyecto.cols || 1} className={classes.gridListTile}>

            <img src={proyecto.mainImage.asset.url} alt={proyecto.mainImage.alt} className={classes.image}/>
            <div className="card-header text-white"><strong>Finished on</strong>:{" "}
                  {new Date(proyecto.date).toLocaleDateString()}</div>

             <GridListTileBar
             title={<a href={proyecto.link} className={classes.link}>{proyecto.title}</a>}
             subtitle={<span><strong>Type</strong>:{" "}{proyecto.projectType}</span>}
         
                  actionIcon={
                <a href={proyecto.link} rel="noopener noreferrer" target="_blank" className={classes.icon}>
                  <VisibilityTwoToneIcon fontSize='large'/>
                </a>
              }
              />
          </GridListTile>
        ))}
      </GridList>
      </Container>
      </div>
  );
}

export default Post
