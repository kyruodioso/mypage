import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'



import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Proyectos from './components/Proyectos';
import Tech from './components/Tech';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const useStyles = makeStyles((theme) => ({
root: {
  minHeight:'100vh',
background:'black',
}
}))


function App() {
  const classes=useStyles();


  return (
    <BrowserRouter>
    <NavBar />
    <Paper className={classes.root}>
    <Switch>
    <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={Proyectos} path='/projects' />
      <Route component={Tech} path='/tech' />

    </Switch>
    <Footer />
    </Paper>
    </BrowserRouter>
  )
}

export default App;
