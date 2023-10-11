import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Room from './pages/Room/index';
import Main from './pages/Main/index';
import NotFound404 from './pages/NotFound404/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="room/:id" element={<Room/>}/>
        <Route path ="/" element={<Main/>}/>
        <Route path ="*" element={<NotFound404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
