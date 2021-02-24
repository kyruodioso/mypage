import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper'


import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer';

import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Paper style={{height: '100vh'}}>
    <Switch>
    <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={Projects} path='/projects' />
      <Route component={Tech} path='/tech' />

    </Switch>
    <Footer />
    </Paper>
    </BrowserRouter>
  )
}

export default App;
