import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/Home'
import NasaPic from './components/NasaPic'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route component={Home} exact path="/"></Route>
      <Route component={NasaPic} path="/nasapic"></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
