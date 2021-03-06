import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'



import sanityClient from '../client';

const useStyles = makeStyles((theme) => ({
    root: {
      textAlign:'center',
    },
    container:{
      backgroundImage: `url('images/background01.png')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#66999',
      minHeight:'100vh',
      paddingBottom:'4.5em',
      paddingTop:'4.5em',
    },
    title:{
      color:"#fff",
      marginBottom:"1em"
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

const Proyect = () => {
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
        <div className={classes.container}>
        <Container >
        <Typography className ={classes.title} variant="h3">My Projects!</Typography>

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
      </div>
  );
}

export default Proyect
