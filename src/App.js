import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Room from './pages/Room/index';
import Main from './pages/Main/index';
import NotFound404 from './pages/NotFound404/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="camera/room/:id" element={<Room/>}/>
        <Route exact path ="camera/" element={<Main/>}/>
        <Route path ="camera/*" element={<NotFound404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
