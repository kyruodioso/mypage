import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
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
      color:'#1eaa1e'
    }

  }));

const Post = () => {
    const [postData, setPost] = useState(null);
    const classes = useStyles();
 
    

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
            title,
            slug,
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
        <Typography className ={classes.title} variant="h3">My Blog!</Typography>
        <Container className={classes.container}>
      <GridList cellHeight={180}  cols={3}>
        <GridListTile
         key="Subheader"
         cols={2}
         className={classes.subheader}
         style={{ height: 'auto' }}
         >
        <ListSubheader component="div" className={classes.listSubheader}>
        <Typography variant="h6" className={classes.Typographyh6}>This is my space for reflection and ... coffee</Typography>
        </ListSubheader>
        <img src="" alt=""/>
        </GridListTile>
                    {postData && postData.map((post, index) => (
            
                            <GridListTile key={post.img} cols={post.cols || 1} className={classes.gridListTile}>

            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>

             <GridListTileBar
             title={post.title}
             actionIcon={
                    <IconButton>
                    <PlayCircleOutlineIcon fontSize='large' className={classes.icon} />
                    </IconButton>
             } />
                         </Link>

          </GridListTile>
        ))}
      </GridList>
      </Container>
      </div>
  );
}

export default Post
