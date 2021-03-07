import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme)=>({
    root: {
      textAlign:'center'
      },
      title:{
        color:"#fff",
        marginBottom:"1em"
      },
      container:{
        backgroundImage: `url('images/javascript-background.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: '#66999',
        minHeight:'100vh',
        paddingBottom:'4.5em',
        paddingTop:'4.5em'
      },
      card: {
       width: 575,
       height: 300,
        opacity:'0.8',
        overflow: 'scroll'
      },
      titleCard: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      presentation:{
        display: 'flex',
        flexWrap:'wrap',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
      },
      perfilImage:{
        height:300,
        flexShrink: 3,
      },
      button:{
        button:0
      }
}))

const About = () => {
    const classes= useStyles();

    return (
        <div className={classes.root}>
          <div className={classes.container}>
            <Container>
        <Typography className ={classes.title} variant="h3">About me!</Typography>
         <div className={classes.presentation}>
        <Card className={classes.card} elevation={3}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          This is my presentation
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <img src="images/perfilAbout.jpg" alt="imagen de perfil" className={classes.perfilImage}/>
    </div>
             </Container>
             </div>
        </div>
    )
}

export default About
