import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowUsers  from './components/showUsers';
import CreateUser from './components/createUser';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowUsers/>}/>
            <Route path='/create' element={ <CreateUser/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
