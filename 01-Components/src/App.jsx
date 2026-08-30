import Heading from './Heading';
import Footer from './Footer';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
function App(){
  const [isDark, setIsDark]=useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(()=>{
    if(isDark){
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
    else{
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  },[isDark])
  return (
    <div>
      <Heading />
      <button onClick={toggleTheme}>Click Me</button>
      <Footer />
    </div>
  )
}

export default App;