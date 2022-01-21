import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Credits } from './pages/Credits.jsx';
import { Posts } from './pages/Posts.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/creditos" component={Credits} />
        <Route path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;