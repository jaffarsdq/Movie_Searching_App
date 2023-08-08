// CSS import
import { useState } from 'react';
import './App.css'

import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './routes/Mainroutes'

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
          <div id='app-wrapper' data-theme={theme}>
            <Navbar />
            <MainRoutes />
          </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
