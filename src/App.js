import React from 'react';
import './App.css'; // Make sure to import your CSS file
import Header from './components/Header';
import Navbar from './components/NavBar';
import MainBody from './components/MainBody';
// Import your components here
const backgroundImageURL = 'https://officechai.com/wp-content/uploads/2016/12/IIM-A.jpg';

function App() {
  const appStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)), url(${backgroundImageURL})`,
    backgroundSize: 'cover', // Cover the entire container
    backgroundRepeat: 'no-repeat', // Don't repeat the image
    backgroundAttachment: 'fixed', // Fixed background
    minHeight: '100vh', // Ensure the container takes up the full viewport height
    display: 'flex', // Make the content flex to cover entire screen
    flexDirection: 'column', // Arrange the content in a column
  };
  return (
    <div className='AppContainer' style={appStyles}>
      <Header />
      <Navbar />
      <MainBody />
    </div>
  );
}

export default App;




