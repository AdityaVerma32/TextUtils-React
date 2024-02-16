import './App.css';
import Navbar from './components/navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about.js';



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#051b4c';
      showAlert("Dark Mode has been Enabled", "success")

      // changing title of the website
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title='Install TextUtils'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Hello here!'
      // }, 1300);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
    <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="contianer mx-5 my-3" >

          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />}/>
            <Route path="/about" element={   <About />}/>
          </Routes>
        </div>
      </Router> */}

    </>
  );
}

export default App;

