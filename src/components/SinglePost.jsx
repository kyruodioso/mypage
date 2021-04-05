import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import SyntaxHighlighter from 'react-syntax-highlighter'
import {irBlack} from 'react-syntax-highlighter/dist/esm/styles/hljs';






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
        backgroundColor:'rgba(12, 12, 12, 0.659)',
          position:'absolute',
          top:'10px',
          left:'0',
          right:'0',
          color:'#fff',
          marginLeft:'30%',
          marginRight:'30%',
          padding:'1em',
          justifyContent: 'center',
          textAlign:'center'
      },
      singlePostImage:{
          position:'relative',
          width:'100%',
          backgroundColor: '#070809'
      },
      authorImage:{
          borderRadius:'100%',
          justifyContent: 'center'
      },
      blockContent:{
        margin:0,
        wordWrap: 'break-word',
        padding:'1em',
        justifyContent: 'center',
        left:0,
        right:0
      },
      paper:{
        backgroundColor:'#f2f1f1',
        width:'100%',
        bottom:0
      },
      code:{
backgroundColor:'#1f1f1f',
color:'#FFFFFF'
      }

    }));

const SinglePost = () => {
    const [singlePost, setSinglePost]= useState(null);
    const {slug} = useParams();
    const classes=useStyles();
    const serializers = {
      types: {
        code: props => (
           <SyntaxHighlighter language={props.node.language} style={irBlack}>
           {props.node.code}
         </SyntaxHighlighter>
        )
      }
    }


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
}`,{slug}).then((date)=> setSinglePost(date[0]))
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
                  
                <img src={urlFor(singlePost.mainImage).url()} alt={singlePost.title} className={classes.singlePostImage}/>
                
                    <div className={classes.subheader}>
    <img src={urlFor(singlePost.authorImage).width(100).url()} alt={singlePost.name} className={classes.authorImage}/>
    <p><strong>by: </strong>{singlePost.name}</p>
    </div>
            </div>

          <Typography variant="h3" className={classes.title}>{singlePost.title}</Typography>
            <BlockContent className={classes.blockContent} blocks={singlePost.body} projectId={sanityClient.clientConfig.projectId} dataset={sanityClient.clientConfig.dataset} imageOptions={{w: 250, fit: 'max', fm:'webp'}} serializers={serializers}/>

            </Paper>

  </Container>
</div>
</div>


    )
}

export default SinglePost
