import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'



const useStyles = makeStyles((theme)=>({
    root: {
        backgroundImage: `url('images/dark-background.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: '#66999',
        minHeight:'100vh',
        paddingBottom:'4.5em',
        paddingTop:'4.5em',
        bottom:0

      },
      title:{
        color:"#fff",
        marginBottom:"1em"
      },
      container:{
        textAlign:'center',
        paddingTop:'5em',
      },
}))

const About = () => {
    const classes= useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
        <Typography className ={classes.title} variant="h3">About me!</Typography>
             </Container>

        </div>
    )
}

export default About
