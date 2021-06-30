import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },
  title: {
    color: "#fff",
    marginBottom: "1em"
  },
  container: {
    backgroundImage: `url('images/javascript-background.png')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#66999',
    minHeight: '100vh',
    paddingBottom: '4.5em',
    paddingTop: '4.5em'
  },
  card: {
    width: 575,
    height: 300,
    opacity: '0.8',
    overflow: 'scroll'
  },
  titleCard: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  presentation: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    height: 300,
    flexShrink: 3,
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(86,93,87, 0.075)',
    boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
    borderBottom: '2px rgba(40,40,40,0.35) solid',
    borderRight: '2px rgba(40,40,40,0.35) solid',
  },
  perfilImage: {
    maxHeight: 300,
    borderRadius: '100%'
  },
  imagenPerro: {
    margin: '1em',
    width: '75%',
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Container>
          <Typography className={classes.title} variant="h3">About me!</Typography>
          <div className={classes.presentation}>
            <Card className={classes.card} elevation={3}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                  "Time is the most valuable"
        </Typography>
                <Typography variant="h5" component="h2">
                  Hi! Im Cristian 😃
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  My English could be better, I know...
        </Typography>
                <Typography variant="body2" component="p">
                  Im a developer, design and artist
          <br />
                  {'"a benevolent smile"'}
                </Typography>
                <Typography variant="body2" component="p">
                  I started immersing myself in the world of programming in 2017, while working making coffee in an office.
                  The desire to grow led me to seek new horizons. It was there when I discovered Arduino,
                  the open source microcontroller that came to invite us back to being kids hand in hand with programming and electronics.
                 </Typography>
                 <br />
                <Typography variant="body2" component="p">
                  It didn't take long for me to realize that what I wanted was to code and discover new technologies, that this filled me up and fills me up.
                  Since then I have studied programming in a self-taught way, getting informed, reading and watching videos. Consuming and creating projects that were left on my pc, well saved and useless.
                  In full study I was unemployed and, faced with the need to get a new job, I temporarily left development
                  In 2019 I resume my studies and, accompanied, I start a project focused on home automation, we call it EC-dom
                  At the same time, I continue researching, learning and developing.
                  </Typography>
              </CardContent>
            </Card>
            <Paper className={classes.paper} elevation={3}>
              <img src="images/perfilAbout.jpg" alt="imagen de perfil" className={classes.perfilImage} />
            </Paper>
          </div>
          <div>
            <img src="images/KyruCoffee.jpg" alt="imagen con perro" className={classes.imagenPerro} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About
