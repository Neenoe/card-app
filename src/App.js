import './App.css';
import Home from './Home';
import ThankYou from './ThankYou';
import { useState } from 'react';

function App() {

  const [showThankYouPage, setShowThankYouPage] = useState(false)
  const [rating, setRating] = useState(null)
  return (
   <>
   {
    showThankYouPage ? (
      <ThankYou rating= {rating}/> 
    ) : (
      <Home
      rating={rating}
      setRating={setRating}
      setShowThankYouPage={setShowThankYouPage}
      />
    )
    
   }
   </>
  );
}

export default App;
