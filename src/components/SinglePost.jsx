import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'



const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const useStyles = makeStyles((theme)=>({
    root: {
      textAlign:'center'
      },
      title:{
        color:"#fff",
        marginBottom:"1em"
      },
      container:{
        background: `#ffff`,
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
        height: 300
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
                <div className={classes.header}>
                <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className={classes.singlePostImage}/>
                    <div className={classes.subheader}>
    <img src={urlFor(singlePost.authorImage).width(100).url()} alt={singlePost.name} className={classes.authorImage}/>
    <p><strong>by: </strong>{singlePost.name}</p>
    <Typography variant="h1" className={classes.title}>{singlePost.title}</Typography>
    </div>
            </div>

            <BlockContent className="text-center" blocks={singlePost.body} projectId="lp91xjme" dataset="production"/>


  </Container>
</div>
</div>


    )
}

export default SinglePost
