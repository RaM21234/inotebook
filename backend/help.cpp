/*
http://localhost:3000       //api url
nodemon ./index.js     //command to run the express js server(start thr api)
npm run start    //command to run the react app

bcrypt.js -- generates hash for the password also using salt
genSalt - additional security string for the password  stored in the database 
pepper - additional security character(s) for the password not stored in the database 


todo extensions : calender, events, tasks 

******latest version code ********
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



*/