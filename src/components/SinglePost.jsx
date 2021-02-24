import React, { useState, useEffect }from 'react';
import {useParams} from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const SinglePost = () => {
    const [singlePost, setSinglePost]= useState(null);
    const {slug} = useParams();

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
        <div className="container">
<div class="jumbotron p-4 p-md-5 text-white bg-secondary">
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic text-center">{singlePost.title}</h1>
    </div>
    <div className="row">
        <div className="col">
    <img src={urlFor(singlePost.authorImage).width(100).url()} alt={singlePost.name} className="singlePostImage"/>
    </div>
    <div className="col">
    <p>{singlePost.name}</p>
    </div>
    </div>
  </div>
  <div className="blog-post">
  <BlockContent className="text-center" blocks={singlePost.body} projectId="lp91xjme" dataset="production"/>
            <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="img-fluid"/>
  </div>

</div>



    )
}

export default SinglePost
