import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';




const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const useStyles = makeStyles((theme)=>({
    root: {
      textAlign:'center'
      },
      title:{
        marginBottom:"1em",
      },
      container:{
        backgroundImage: `linear-gradient(to top, #0a5e92, #006692, #006e91, #16758e, #2c7c8b, #338893, #3c939b, #459fa3, #41b3b9, #39c8d0, #2bdde7, #00f3ff)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: '#66999',
        minHeight:'100vh',
        paddingBottom:'4.5em',
        paddingTop:'4.5em'
      },
      header:{
        position:'relative',
        textAlign:'center',
        overflow:'hidden',
        height: 220,
        marginBottom:2
      },
      subheader:{
          position:'absolute',
          top:'10px',
          left:'0',
          right:'0'
      },
      singlePostImage:{
          position:'relative',
          width:'100%',
      },
      authorImage:{
          borderRadius:'100%'
      },
      blockContent:{
        wordWrap: 'break-word',
        padding:2
      },
      paper:{
        textAlign:'center',
        bottom:0
      }

    }));

const SinglePost = () => {
    const [singlePost, setSinglePost]= useState(null);
    const {slug} = useParams();
    const classes=useStyles();


    useEffect(() => {
sanityClient.fetch(`*[slug.current == "${slug}"]{
    title,
    _id,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    body,
    "name": author->name,
    "authorImage": author->image
}`).then((date)=> setSinglePost(date[0]))
.catch(console.error);
    },[slug]);

    if(!singlePost) return <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>;

    return (
        <div className={classes.root}>
        <div className={classes.container}>
            <Container>
            <Paper className={classes.paper}>
                <div className={classes.header}>
                <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className={classes.singlePostImage}/>
                    <div className={classes.subheader}>
    <img src={urlFor(singlePost.authorImage).width(100).url()} alt={singlePost.name} className={classes.authorImage}/>
    <p><strong>by: </strong>{singlePost.name}</p>
    </div>
            </div>

          <Typography variant="h3" className={classes.title}>{singlePost.title}</Typography>
            <BlockContent className={classes.blockContent} blocks={singlePost.body} projectId="lp91xjme" dataset="production"/>
            </Paper>

  </Container>
</div>
</div>


    )
}

export default SinglePost
