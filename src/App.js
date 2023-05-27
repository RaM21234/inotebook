import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import New from './components/New';
import Tasks from './components/Tasks';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>

        <BrowserRouter>
          <Navbar />
          
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/new" element={<New/>} />
              <Route exact path="/task" element={<Tasks />} />
            </Routes>
          </div>
        </BrowserRouter>

      </NoteState>
    </>

  );
}

export default App;





