import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'



import sanityClient from '../client';

import BackgroundImage from '../img/fotografierende.jpg'

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        height:'100%',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        textAlign:'center',
        paddingTop:'5em',
        color:"#fff"
      },
      container:{
        paddingTop:'3em',
      },
      card: {
        maxWidth: 345,
        background: 'rgba( 89, 173, 71, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 1.5px )',
        webkitBackdropFilter: 'blur( 1.5px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        color:"#fff",
        margin:'1em'
      },
      gridList:{
        marginTop:'1em'
      },
      media: {
        height: 140,
      },
}))


const Projects = () => {



    const classes=useStyles();


    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type=="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`).then((data) => setProjectData(data))
            .catch(console.error)
    }, []);

    return (
        <main className={classes.root}>
          <Container className={classes.container}>
                <div>
                <Typography className ={classes.title} variant="h3">My Projects</Typography>
                </div>
                <GridList cellHeight={180} cols={3} >
                    {projectData && projectData.map((project, index) => (
<Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {project.title}
          </Typography>
          <div className="card-header text-white"><strong>Finished on</strong>:{" "}
                  {new Date(project.date).toLocaleDateString()}</div>
          <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
          </Typography>
          <span>
                  <strong>Type</strong>:{" "}
                              {project.projectType}
            </span>  
        </CardContent>
     
      <CardActions>
        <Button size="small" color="secondary" component={Link} to={project.link} rel="noopener noreferrer" target="_blank">
                    View The Project{" "}
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
                   ))}
               </GridList>
               </Container>
        </main>
    )
}

export default Projects
